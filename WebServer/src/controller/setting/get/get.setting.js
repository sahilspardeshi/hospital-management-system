import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getSettings = async (req, res) => {
    try {
        const settings = await prisma.setting.findMany(); // Retrieving all entries
        res.status(200).json(settings); // Sending response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handling error
    }
};
