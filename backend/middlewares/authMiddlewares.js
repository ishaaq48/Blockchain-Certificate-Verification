import jwt from "jsonwebtoken";

// Middleware to verify JWT token from cookie
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token; // Read token from cookie
    console.log("Token Received:", token);
  if (!token) return res.status(401).json({ msg: "Not authorized, no token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded User:", decoded);
    req.user = decoded; // Attach user data to request object
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error);
    res.status(401).json({ msg: "Invalid token" });
  }
};

// Role-Based Access Control Middleware
const roleMiddleware = (roles) => {
  return (req, res, next) => {
     console.log(`User Role: ${req.user.role}, Allowed Roles: ${roles}`); 
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ msg: "Access denied" });
    }
    next();
  };
};

export { authMiddleware, roleMiddleware };
