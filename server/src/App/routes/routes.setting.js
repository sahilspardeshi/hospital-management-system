import express from 'express';
import {createSetting, updateSetting,deleteSetting} from "../controller/setting/index.js";
const settingRoute = express.Router();

settingRoute.route('/create').post(createSetting);
settingRoute.route('/update/:id').put(updateSetting);
settingRoute.route('/delete/:id').delete(deleteSetting);
export default settingRoute;
