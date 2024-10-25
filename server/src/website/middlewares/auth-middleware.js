import jwt from 'jsonwebtoken';

// Secret key for signing the JWT 
const JWT_SECRET = process.env.JWT_SECRET || 'xftyuikmnbvfdrfguh';

// Middleware to verify JWT token
export const authenticateToken = (req, res, next) => {
   
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Access token required." });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; 

        console.log("req.user", req.user)
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token." });
    }
};
