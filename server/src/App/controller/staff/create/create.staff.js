import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const SALT_ROUNDS = 10; // Number of salt rounds for hashing

// Create a new Staff member
export const createStaff = async (req, res) => {
  const { fullName, specialization, user, password, type, contact_number, email, qualifications, department , role } = req.body;

  try {

    // Check if email already exists
    const checkEmail = await prisma.staff.findFirst({
      where: { email }
    });

    if (checkEmail) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Combine the password with the secret key
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new staff member
    const newStaff = await prisma.staff.create({
      data: {
        fullName,
        specialization,
        user,
        password: hashedPassword, // Save the hashed password
        type,
        contact_number,
        email,
        qualifications,
        department,
        role
      },
    });

    console.log(newStaff);
    return res.status(201).json({ msg: "success" ,
      data:newStaff
    });
  } catch (error) {
    console.error('Error creating staff:', error.message);
    return res.status(500).json({ error: `Error creating staff: ${error.message}` });
  }
};
