import express from 'express';
import {createMarketing} from "../controller/marketing/index.js"
import { loginClient } from '../controller/client/auth/auth.client.js';
import { createClient, createClientSubscription } from '../controller/client/create/create.client.js';
import { updateSubscriptionStatus } from '../controller/marketing/Clientsubscription/Update.clientsub.js';
import { createPlan } from '../controller/marketing/Plansubscription/create.subplan.js';
import { createPaymentMethod } from '../controller/marketing/PaymentSub/create.pay.js';



const marketing = express()
marketing.route('/create').post(createMarketing);
marketing.route('/client').post(createClient)
marketing.route('/clientlogin').post(loginClient)
marketing.route('/clientsub').post(createClientSubscription)
marketing.route('/updateclientsub').put(updateSubscriptionStatus)
marketing.route('/subplan').post(createPlan)
marketing.route('/createpay').post(createPaymentMethod)
export default marketing;