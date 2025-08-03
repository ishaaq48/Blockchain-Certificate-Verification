import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
};

const login =  async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Generate JWT Token
    const payload = { userId: user._id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Set token in HTTP-Only Cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,               // required for cross-site cookies over HTTPS
      sameSite: "None",           // required for cross-origin cookies
      maxAge: 3600000             // 1 hour
    });


    res.json({ msg: "Login successful", user: { id: user._id, name: user.name, email: user.email, role: user.role } });

  } catch (error) {
    console.error("Login Error:", error); // ✅ Log error in console
    res.status(500).json({ msg: "Server error", error: error.message || error });
  }
};

// Logout User (Clear Cookie)
const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ msg: "Logged out successfully" });
};

export { registerUser,login,logout }
