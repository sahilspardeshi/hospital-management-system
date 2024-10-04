import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany(); // Retrieving all entries
        res.status(200).json(users); // Sending response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handling error
    }
};
