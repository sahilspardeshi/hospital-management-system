import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10; // Number of salt rounds for hashing
const SECRET_KEY = 'your_secret_key'; // Replace this with your actual secret key

export const updateStaff = async (req, res) => {
    const { id } = req.params;
    const { full_name, specialization, user, password, type, contact_number, email, qualifications, department } = req.body;

    try {
        // Combine the password with the secret key
        const passwordWithKey = `${password}${SECRET_KEY}`;

        // Hash the combined password
        const hashedPassword = await bcrypt.hash(passwordWithKey, SALT_ROUNDS);

        const updatedStaff = await prisma.staff.update({
            where: { Staff_id: BigInt(id) },
            data: {
                full_name,
                specialization,
                user,
                password: hashedPassword, // Save the hashed password
                type,
                contact_number,
                email,
                qualifications,
                department,
                updated_at: new Date(), // Update the timestamp
            },
        });

        // Function to serialize staff data
        const serializeStaff = (staff) => {
            return {
                ...staff,
                Staff_id: staff.Staff_id !== undefined && staff.Staff_id !== null ? staff.Staff_id.toString() : null, // Convert BigInt to string if it exists
                created_at: staff.created_at !== undefined && staff.created_at !== null ? staff.created_at.toISOString() : null, // Convert Date to ISO string if it exists
                updated_at: staff.updated_at !== undefined && staff.updated_at !== null ? staff.updated_at.toISOString() : null  // Convert Date to ISO string if it exists
            };
        };

        const serializedUpdatedStaff = serializeStaff(updatedStaff);
        return res.json(serializedUpdatedStaff);
    } catch (error) {
        console.error('Error updating staff:', error.message);
        return res.status(500).json({ error: 'Error updating staff' });
    }
};