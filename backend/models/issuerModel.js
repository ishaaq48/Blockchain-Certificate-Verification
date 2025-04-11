import mongoose from "mongoose";

const issuerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    organizationName: {
        type: String,
        required: true
    },
    issuedCertificates: [
        {
            certificateId: { type: String, unique: true},
            studentName: { type: String },
            courseName: { type: String },
            issuedDate: { type: Date, default: Date.now },
            certificateHash: { type: String },
        },
    ],
}, 
    { timestamps: true})

const Issuer = mongoose.model("Issuer", issuerSchema)
export default Issuer