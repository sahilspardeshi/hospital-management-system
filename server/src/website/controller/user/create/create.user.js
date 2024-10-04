import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
    try {
        const { fullName, username, email, password, mobile, role } = req.body; // Extracting parameters
        const user = await prisma.user.create({
            data: { fullName, username, email, password, mobile, role }, // Creating entry
        });
        res.status(201).json(user); // Sending response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handling error
    }
};
