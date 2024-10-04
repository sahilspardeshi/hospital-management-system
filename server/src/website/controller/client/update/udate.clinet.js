import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateClient = async (req, res) => {
    const { id } = req.params; // Extracting ID from params
    const { name, phone, email, password, address, dob, hospital } = req.body; // Extracting parameters
    try {
        const client = await prisma.client.update({
            where: { id: Number(id) }, // Finding entry by ID
            data: { name, phone, email, password, address, dob, hospital }, // Updating entry
        });
        res.status(200).json(client); // Sending response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handling error
    }
};


export const updateClientSubscription = async (req, res) => {
    const { id } = req.params; // Extracting ID from params
    const { clientId, startDate, endDate, paymentStatus, subscriptionStatus } = req.body; // Extracting parameters
    try {
        const clientSubscription = await prisma.clientSubscription.update({
            where: { id: Number(id) }, // Finding entry by ID
            data: { clientId, startDate, endDate, paymentStatus, subscriptionStatus }, // Updating entry
        });
        res.status(200).json(clientSubscription); // Sending response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handling error
    }
};
