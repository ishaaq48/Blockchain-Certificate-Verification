import { ethers } from "ethers";
import { createHash } from "node:crypto";
import dotenv from "dotenv";
dotenv.config();

// Blockchain connection setup
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Contract ABI and instances
const contractAbi = [
  "function issueCertificate(bytes32) public",
  "function verifyCertificate(bytes32) public view returns (bool)"
];

const signerContract = new ethers.Contract(process.env.CONTRACT_ADDRESS, contractAbi, wallet);
const readContract = signerContract.connect(provider); // for view-only reads

// 🔐 Generate a certificate hash (SHA-256)
function generateCertificateHash(data) {
  const hash = createHash("sha256");
  hash.update(data);
  return "0x" + hash.digest("hex");
}

// 📤 Issue certificate to blockchain
async function issueCertificate(certificateHashHex) {
  try {
    console.log("🔒 Issuing certificate with hash:", certificateHashHex);
    const tx = await signerContract.issueCertificate(certificateHashHex);
    await tx.wait();
    console.log("✅ Certificate issued successfully!");
  } catch (error) {
    console.error("❌ Error issuing certificate:", error);
    throw error;
  }
}

// 🔍 Verify certificate from blockchain
async function verifyCertificate(certificateHashHex) {
  try {
    const isValid = await readContract.verifyCertificate(certificateHashHex);
    console.log("🔎 Certificate is valid:", isValid);
    return isValid;
  } catch (error) {
    console.error("❌ Error verifying certificate:", error);
    throw error;
  }
}

// ✅ Export functions to use in routes/controllers
// export {
//   generateCertificateHash,
//   issueCertificate,
//   verifyCertificate
// };

// const testHash = generateCertificateHash("John | AI | 2024");
// // must log something like: 0x98efd8ca401d78...
// await issueCertificate(testHash);
// await new Promise(res => setTimeout(res, 3000));
// // await verifyCertificate(testHash); // must be exactly the same!
// const result = await readContract.verifyCertificate(testHash);
// console.log("🧪 Verified via callStatic:", result);


export {
  generateCertificateHash,
  issueCertificate,
  verifyCertificate
}
