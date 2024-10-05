import express from 'express';
import AllRoutes from './router/index.js'; // Add .js extension for local file import
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const WebApp = express();

// Middleware
WebApp.use(express.json());
WebApp.use(cookieParser());
WebApp.use(bodyParser.urlencoded({ extended: false }));

// Use all routes under the /api path
WebApp.use('/api', AllRoutes);

// Export the app
export default WebApp;
