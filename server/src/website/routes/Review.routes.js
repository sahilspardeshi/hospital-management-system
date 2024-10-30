import express from 'express';
import { upload } from '../File_upload/Multerfile.js';
import { createReview } from '../controller/review/create/create.review.js';



const review = express.Router();

review.post('/createreview' , upload.single("review_img"), createReview)
export default review;