import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateSetting = async (req, res) => {
    const { id } = req.params; // Extracting ID from params
    const { key, value } = req.body; // Extracting parameters
    try {
        const setting = await prisma.setting.update({
            where: { id: Number(id) }, // Finding entry by ID
            data: { key, value }, // Updating entry
        });
        res.status(200).json(setting); // Sending response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handling error
    }
};
