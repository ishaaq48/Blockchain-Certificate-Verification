import express from 'express';
import { authMiddleware, roleMiddleware } from '../middlewares/authMiddlewares.js';
import {
  generateCertificateHash,
  issueCertificate,
  verifyCertificate
} from '../ether.js'; // adjust path as needed

const router = express.Router();

// 📤 Issuer: Issue certificate (on-chain)
router.post("/issue-certificate", authMiddleware, roleMiddleware(["issuer"]), async (req, res) => {
  try {
    const { studentName, courseName, issuedYear } = req.body;

    if (!studentName || !courseName || !issuedYear) {
      return res.status(400).json({ msg: "Missing required fields" });
    }

    const combinedData = `${studentName} | ${courseName} | ${issuedYear}`;
    const certHash = generateCertificateHash(combinedData);

    await issueCertificate(certHash);

    return res.status(200).json({
      msg: "✅ Certificate issued",
      hash: certHash
    });
  } catch (err) {
    console.error("Issue error:", err.message);
    res.status(500).json({ msg: "Error issuing certificate", error: err.message });
  }
});

// 🔍 Verifier: Verify certificate
router.post("/verify-certificate", authMiddleware, roleMiddleware(["verifier"]), async (req, res) => {
  try {
    const { studentName, courseName, issuedYear } = req.body;

    if (!studentName || !courseName || !issuedYear) {
      return res.status(400).json({ msg: "Missing required fields" });
    }

    const combinedData = `${studentName} | ${courseName} | ${issuedYear}`;
    const certHash = generateCertificateHash(combinedData);

    const result = await verifyCertificate(certHash);

    return res.status(200).json({
      msg: result ? "✅ Certificate is valid" : "❌ Certificate is invalid",
      valid: result,
      hash: certHash
    });
  } catch (err) {
    console.error("Verify error:", err.message);
    res.status(500).json({ msg: "Error verifying certificate", error: err.message });
  }
});

// 🛡️ Admin: Revoke (placeholder)
router.delete("/revoke-certificate", authMiddleware, roleMiddleware(["admin"]), (req, res) => {
  res.json({ msg: "🔒 Certificate revoked successfully (logic pending)" });
});

export default router;
