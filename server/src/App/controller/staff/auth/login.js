
import bcrypt from 'bcrypt';
import prisma from '../../../db/index.js';
import {setTokens} from '../../../middleware/generateToken.js'

export async function login (req, res) {

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
    

    // Compare the hashed passwords
    const isMatch = await bcrypt.compare(password, staffMember.password);
    if (isMatch) {
      const { accessToken, refreshToken } = setTokens(user, res);

      return res.status(200).json({ msg: 'Login successful',accessToken,refreshToken });

    } else {
      return res.status(401).json({ error: 'Invalid password' });

    }
  } catch (error) {
    console.error('Error verifying staff:', error.message);
    return res.status(500).json({ error: 'Error verifying staff' });
  }
};

