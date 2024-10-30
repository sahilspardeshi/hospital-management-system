import { PrismaClient } from '@prisma/client';
import Uploadoncloudinary from '../../../File_upload/Cloudnaryfile.js';

const prisma = new PrismaClient();

export const createReview = async (req, res) => {
  try {
    const { rating, reviewText } = req.body;


    const parseRating = parseInt(rating, 10);

   
    if (isNaN(parseRating)) {
      return res.status(400).json({ error: 'Invalid rating value' });
    }

   
    const image = await Uploadoncloudinary(req.file.path);
    console.log(image);

  
    if (!parseRating || !reviewText) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

   
    const Review = await prisma.review.create({
      data: {
        rating: parseRating,
        reviewText,
        image,
      },
    });

    console.log(Review);

   
    const newReview = {
      ...Review,
      id: Review.id.toString(),
    };

    res.status(201).json(newReview);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
