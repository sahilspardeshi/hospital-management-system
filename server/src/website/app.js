import express from 'express';
import AllRoutes from './router/index.js'; // Add .js extension for local file import
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const App = express();

// Middleware
App.use(express.json());
App.use(cookieParser());
App.use(bodyParser.urlencoded({ extended: false }));

// Use all routes under the /api path
App.use('/api', AllRoutes);

// Export the app
export default App;
