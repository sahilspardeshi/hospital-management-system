// src/App/prisma/index.js
import { PrismaClient } from '@prisma/client';

// Instantiate the Prisma client
const prisma = new PrismaClient();

// Export the Prisma client for use throughout your app
export default prisma;
