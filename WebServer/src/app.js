import express from 'express';
import AllRoutes from './router/index.js'; // Add .js extension for local file import
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const Main = express();

// Middleware
Main.use(express.json());
Main.use(cookieParser());
Main.use(bodyParser.urlencoded({ extended: false }));

// Use all routes under the /api path
Main.use('/api', AllRoutes);

// Export the app
export default Main;
