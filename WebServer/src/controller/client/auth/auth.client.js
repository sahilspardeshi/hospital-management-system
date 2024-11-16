import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'xftyuikmnbvfdrfguh';


export const loginClient = async (req, res) => {
    try {
        const { name, password } = req.body;


        if (!name || !password) {
            return res.status(400).json({ message: "Clientname and password are required" });
        }


        const marketing = await prisma.marketing.findFirst({
            where: { name },
        });

        if (!marketing) {
            return res.status(404).json({ message: "client not found" });
        }


        const isValidPassword = await bcrypt.compare(password, marketing.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        //generate token
        const token = jwt.sign(
            { id: marketing.id.toString(), name: marketing.name}, // Convert id to string
            JWT_SECRET,
            { expiresIn: '1h' }
        );


        // Convert bigint to string
        const responseClient = {
            ...marketing,
            id: marketing.id.toString()
        };

        console.log(responseClient);

        res.status(200).json({
            token: token,
            data: responseClient

        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};