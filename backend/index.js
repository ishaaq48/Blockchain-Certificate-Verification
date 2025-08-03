// package imports
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from 'cors'

// file imports
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import protectedRoutes from "./routes/protectedRoutes.js"

const PORT = process.env.PORT || 5000
dotenv.config()

const app = express()


// middleware

app.use(cors({
  origin: "https://blockchainbasedcertifynow.netlify.app", // ✅ frontend URL
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// api endpoints
app.use("/api/auth",authRoutes)
app.use("/api/protected", protectedRoutes);

// connect to database and start server
connectDB();
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
