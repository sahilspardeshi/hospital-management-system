import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_SECRET = 'your_access_token_secret'; // Replace with your actual secret key

// Middleware to verify the JWT token
export const authenticateToken = (req, res, next) => {
    const cookies = req.headers['cookie'];
  
    if (!cookies) {
      return res.status(401).json({ error: 'No cookies found' });
    }
  
    const token = cookies.split('; ').find(cookie => cookie.startsWith('accessToken='));
  
    if (!token) {
      return res.status(401).json({ error: 'Access token required' });
    }
  
    // Extract the actual token value
    const accessToken = token.split('=')[1];
  
    // Log the extracted token for debugging
    console.log("Extracted Access Token:", accessToken);
  
    // Verify the token using JWT
    jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        console.error("JWT Verification Error:", err.message); // Log error for debugging
        return res.status(403).json({ error: 'Invalid or expired access token' });
      }
  
      req.user = user;
      next();
    });
  };
  
