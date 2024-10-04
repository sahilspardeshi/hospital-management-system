import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateUser = async (req, res) => {
    const { id } = req.params; // Extracting ID from params
    const { fullName, username, email, password, mobile, role } = req.body; // Extracting parameters
    try {
        const user = await prisma.user.update({
            where: { id: Number(id) }, // Finding entry by ID
            data: { fullName, username, email, password, mobile, role }, // Updating entry
        });
        res.status(200).json(user); // Sending response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handling error
    }
};
