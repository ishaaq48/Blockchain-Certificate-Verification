import mongoose from "mongoose";

const verifierSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link to User Schema
  organizationName: { type: String, required: true }, // Company Name
  verificationHistory: [
    {
      certificateID: { type: String },
      studentName: { type: String },
      verificationDate: { type: Date, default: Date.now },
      status: { type: String, enum: ["Valid", "Invalid", "Revoked"], default: "Valid" }
    }
  ],
}, 
  { timestamps: true});

const Verifier = mongoose.model("Verifier", verifierSchema)
export default Verifier