import prisma from "../../../db/index.js";
import { generateAccessToken } from "../../../middleware/generateToken.js";

export async function  refreshToken  (req, res)  {
    const refreshToken = req.cookies.refreshToken; // Read refresh token from cookies
    
    
    if (!refreshToken) {
      return res.status(403).json({ msg: "Refresh token not found" }); // Forbidden if no refresh token is provided
    }
  
    try {
      // Verify the refresh token
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(403).json({ msg: "Invalid refresh token" }); // Handle token verification errors
  
        // Fetch the staff member from the database
        const staffMember = await prisma.staff.findUnique({ where: { email: user.email } });
        
  
        if (!staffMember) {
          return res.status(403).json({ msg: "Staff member no longer exists." }); // Handle missing staff member
        }
  
        // Generate a new access token
        const newAccessToken = generateAccessToken(staffMember)
        
  
        // Set the new access token as an HTTP-only cookie
        res.cookie('accessToken', newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
          sameSite: 'Strict', // Helps prevent CSRF attacks
          maxAge: 15 * 60 * 1000, // 15 minutes for the access token
        });
  
        // Respond with success and the new access token 
        return res.status(200).json({
          msg: "Access token refreshed successfully",
          accessToken: newAccessToken, // Send the token back if needed (optional)
        });
      });
    } catch (error) {
      console.error('Error refreshing token:', error.message);
      return res.status(500).json({ error: 'Error refreshing token' });
    }
  };
  