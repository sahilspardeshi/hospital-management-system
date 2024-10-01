import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import App from './app.js'; // Explicitly specify the file extension
import cluster from 'cluster'; // Correct import
import os from 'os';

dotenv.config({
  path: './.env'
})
const totalCPUs = os.cpus().length;
if (cluster.isPrimary || cluster.isMaster) {  // For compatibility with older versions
  console.log(`Primary ${process.pid} is running`); 

  // Fork workers
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  const allowedOrigins = ['http://localhost:3000'];
  const app = express();
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Allow requests with no origin
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Enable credentials
  }));

  let orderDate = new Date().setDate() + 1;
  
  app.use((req, res, next) => {
    res.setTimeout(5000); // Timeout in milliseconds (5000 ms = 5 seconds)
    next();
  });

  app.use('/', App);

  app.listen(4000, () => {
    console.log('listening on *:4000');
  });
}
