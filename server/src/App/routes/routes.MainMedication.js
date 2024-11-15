import express from "express";
import { createMainMedication } from "../controller/medicationFile/create/create.js";

const mainMedication = express.Router();

// Route to create Medication
mainMedication.route('/create').post(createMainMedication);


export default mainMedication;
