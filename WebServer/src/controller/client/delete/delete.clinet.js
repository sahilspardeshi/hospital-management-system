import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteClient = async (req, res) => {
    const { id } = req.params; // Extracting ID from params
    try {
        await prisma.client.delete({ where: { id: Number(id) } }); // Deleting entry
        res.status(204).send(); // Sending no content response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handling error
    }
};

export const deleteClientSubscription = async (req, res) => {
    const { id } = req.params; // Extracting ID from params
    try {
        await prisma.clientSubscription.delete({ where: { id: Number(id) } }); // Deleting entry
        res.status(204).send(); // Sending no content response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handling error
    }
};
