import express from 'express';
import { createUserCredentials } from '../controller/Usercredential/create/usercredential.js';


const UserCredential = express()

UserCredential.post('/createcredential', createUserCredentials);

export default UserCredential;