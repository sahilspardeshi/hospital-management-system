import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createSetting = async (req, res) => {
    try {
        const { key, value } = req.body; // Extracting parameters
        const setting = await prisma.setting.create({
            data: { key, value }, // Creating entry
        });
        res.status(201).json(setting); // Sending response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handling error
    }
};
