import prisma from "../../../db/default.js";
import bcrypt from 'bcrypt'


// Create a new Marketing record
export const createMarketing = async (req, res) => {
  try {
    const { fullName, phone, email, password, address, dateOfBirth, hospitalName } = req.body;
    console.log(req.body)
    // Validate required fields
    if (!fullName || !phone || !password || !address || !dateOfBirth || !hospitalName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    

    let newMarketing = await  prisma.marketing.create({
      data: {
        name:fullName,
        phone,
        email,
        password: hashedPassword,
        address,
        dob:dateOfBirth,
        hospital:hospitalName,
      },
    });

    
newMarketing.id = newMarketing.id.toString();

    res.status(201).json(newMarketing);
  } catch (error) {
    console.error(error);
    if (error.code === 'P2002') {
      // Unique constraint failed
      res.status(409).json({ error: `Unique constraint failed on the field: ${error.meta?.target}` });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
