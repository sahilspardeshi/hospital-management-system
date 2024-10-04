import express from 'express'
import {getAdvertisementById,getAllAdvertisements,updateAdvertisement,deleteAdvertisement,createAdvertisement} from '../controller/advertisement/index.js'
const advertisement =  express.Router();
advertisement.route('/create').post(createAdvertisement);
export default advertisement;