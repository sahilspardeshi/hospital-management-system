import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const staffLogin = async (req, res) => {

  const { password, email } = req.body;

  try {
    // Retrieve the staff member from the database
    const staffMember = await prisma.staff.findUnique({
      where: { email },
    });

    if (!staffMember) {
      return res.status(404).json({ error: 'Staff member not found' });
    }

    // Combine the provided password with the secret key
    const passwordWithKey = `${password}${process.env.SECRET_KEY}`;

    // Compare the hashed passwords
    const isMatch = await bcrypt.compare(passwordWithKey, staffMember.password);


    if (isMatch) {

      // Generate access token
      const accessToken = jwt.sign(
        { email: staffMember.email, id: staffMember.id, role: staffMember.role },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
      );

      // Generate refresh token
      const refreshToken = jwt.sign(
        { email: staffMember.email, id: staffMember.id, role: staffMember.role },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
      );

      // Set tokens as HTTP-only cookies (cannot be accessed by JavaScript)
      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: true, // Set to true if you're using HTTPS
        sameSite: 'Strict', // Helps prevent CSRF attacks
        maxAge: 15 * 60 * 1000, // 15 minutes for the access token
      });

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true, // Set to true if you're using HTTPS
        sameSite: 'Strict', // Helps prevent CSRF attacks
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days for the refresh token
      });


      // Respond with a success message
      return res.status(200).json({ msg: 'Login successful' });

    } else {
      return res.status(401).json({ error: 'Invalid password' });

    }
  } catch (error) {
    console.error('Error verifying staff:', error.message);
    return res.status(500).json({ error: 'Error verifying staff' });
  }
};

//****************************************************************************************************************//

//referesh token endpoint
export const refreshToken = async (req, res) => {
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
      const newAccessToken = jwt.sign(
        { email: staffMember.email, id: staffMember.id, role: staffMember.role },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
      );
      

      // Set the new access token as an HTTP-only cookie
      res.cookie('accessToken', newAccessToken, {
        httpOnly: true,
        secure: true, // Set to true if you're using HTTPS
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
