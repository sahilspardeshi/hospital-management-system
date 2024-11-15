import { PrismaClient } from '@prisma/client';
import Uploadoncloudinary from '../../../File_upload/Cloudnaryfile.js';

const prisma = new PrismaClient();

// export const createSetting = async (req, res) => {
//     try {
//         const { key, value } = req.body; // Extracting parameters
//         const setting = await prisma.setting.create({
//             data: { key, value }, // Creating entry
//         });
//         res.status(201).json(setting); // Sending response
//     } catch (error) {
//         res.status(500).json({ error: error.message }); // Handling error
//     }
// };




export const createSetting = async (req, res) => {
    try {
        const { imageUrl, hospital, domain, client_id } = req.body;

        console.log("this is file", req.file);

        // If  file is provided then Upload image
        const uploadedImageUrl = req.file ? await Uploadoncloudinary(req.file.path) : imageUrl;
        console.log(uploadedImageUrl);

        if (!hospital || !domain || !client_id || !uploadedImageUrl) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        // client id exist
        const existingClient = await prisma.client.findUnique({
            where: { id: client_id },
        });

        if (!existingClient) {
            return res.status(400).json({ error: 'Invalid client_id' });
        }
        // Create new setting
        const newSetting = await prisma.setting.create({
            data: {
                imageUrl: uploadedImageUrl,
                hospital,
                domain,
                client_id
            },
        });
        console.log(newSetting)

        const responseSetting = {
            ...newSetting,
            id: newSetting.id.toString(),
            client_id: newSetting.client_id.toString(),
        };

        res.status(201).json(responseSetting);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


