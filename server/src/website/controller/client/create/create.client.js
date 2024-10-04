import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createClient = async (req, res) => {
    try {
        const { name, phone, email, password, address, dob, hospital } = req.body; // Extracting parameters
        const client = await prisma.client.create({
            data: { name, phone, email, password, address, dob, hospital }, // Creating entry
        });
        res.status(201).json(client); // Sending response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handling error
    }
};

export const createClientSubscription = async (req, res) => {
    try {
        const { clientId, startDate, endDate, paymentStatus, subscriptionStatus } = req.body; // Extracting parameters
        const clientSubscription = await prisma.clientSubscription.create({
            data: { clientId, startDate, endDate, paymentStatus, subscriptionStatus }, // Creating entry
        });
        res.status(201).json(clientSubscription); // Sending response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handling error
    }
};
