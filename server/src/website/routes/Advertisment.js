import express from 'express'
import {getAdvertisementById,getAllAdvertisements,updateAdvertisement,deleteAdvertisement,createAdvertisement} from '../controller/advertisement/index.js'
import {upload} from "../File_upload/Multerfile.js"


const advertisement =  express.Router();
advertisement.post('/create_ad', upload.single("advertise_img"), createAdvertisement);
advertisement.delete('/delete_ad/:id' ,deleteAdvertisement);
advertisement.get('/getall_ad' , getAllAdvertisements);
advertisement.get('/getad_ad/:id' ,getAdvertisementById );
advertisement.put('/update_ad/:id', upload.single("advertise_img") , updateAdvertisement)
export default advertisement;