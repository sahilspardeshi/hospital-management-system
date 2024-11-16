import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



export const createUserCredentials = async (req, res) => {
  try {
    const { username, password, phone, role, client_id } = req.body;

    const userCredentials = await prisma.userCredentials.create({
      data: {
        username,
        password,
        phone,
        role,
        client: {
          connect: { id: client_id },
        },
      },
    });
    res.status(201).json(userCredentials);
  } catch (err) {
    res.status(500).json({ err});
  }
};