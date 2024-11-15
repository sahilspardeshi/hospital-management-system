import express from 'express';
import {createMarketing , loginClient ,createClient, createClientSubscription ,updateSubscriptionStatus ,createPlan ,createPaymentMethod} from "../controller/marketing/index.js"



const marketing = express()
marketing.route('/create').post(createMarketing);
marketing.route('/client').post(createClient)
marketing.route('/clientlogin').post(loginClient)
marketing.route('/clientsub').post(createClientSubscription)
marketing.route('/updateclientsub').put(updateSubscriptionStatus)
marketing.route('/subplan').post(createPlan)
marketing.route('/createpay').post(createPaymentMethod)
export default marketing;