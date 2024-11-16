import express from 'express';
import { upload } from '../File_upload/Multerfile.js';
import { createSetting } from '../controller/setting/create/create.setting.js';


const setting = express()

setting.post('/createset', upload.single("logo"), createSetting);

export default setting;