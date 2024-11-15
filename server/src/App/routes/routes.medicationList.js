import express from "express";
import { getMedicationListByName } from "../controller/medicationList/get/get.medicationList.js";

const medicationList = express.Router();

medicationList.route('/getbyname/:name').post(getMedicationListByName);

export default medicationList;