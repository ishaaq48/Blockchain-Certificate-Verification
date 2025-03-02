import express from 'express'
import { authMiddleware,roleMiddleware } from '../middlewares/authMiddlewares.js'
const router = express.Router()

router.post("/issue-certificate", authMiddleware, roleMiddleware(["issuer"]), (req, res) => {
  res.json({ msg: "Certificate issued successfully" });
});

// Protected Route for VERIFIER (Only verifiers can access)
router.get("/verify-certificate", authMiddleware, roleMiddleware(["verifier"]), (req, res) => {
  res.json({ msg: "Certificate verification successful" });
});

// Protected Route for ADMIN (Only admins can access)
router.delete("/revoke-certificate", authMiddleware, roleMiddleware(["admin"]), (req, res) => {
  res.json({ msg: "Certificate revoked successfully" });
});

export default router