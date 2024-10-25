import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cluster from 'cluster'; // Correct import
import os from 'os';
import WebApp from './website/app.js';
import SoftwareApp from './App/app.js'
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

  const app = express();
  const allowedOrigins = ['http://localhost:5173'];

  const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  

  let orderDate = new Date().setDate() + 1;
  
  app.use((req, res, next) => {
    res.setTimeout(5000); // Timeout in milliseconds (5000 ms = 5 seconds)
    next();
  });
  const subdomainRoutingFunction = (req) => {
    const host = req.hostname || req.get('host'); // Get the hostname
  
    const subdomains = host.split('.'); // Split the hostname into parts
  
    // Check if there is a subdomain (ignoring "www" if present)
    if (subdomains.length > 1 && subdomains[0] !== 'www') {
      console.log('Routing to SoftwareApp');
      return SoftwareApp; // Use SoftwareApp routes
    } else {
      console.log('Routing to App');
      return WebApp; // Use App routes
    }
  };
  
  
  // Use the function to dynamically determine the route:
  // app.use('/', (req, res, next) => {
  //   const routeHandler = subdomainRoutingFunction(req); // Determine the route
  //   routeHandler(req, res, next); // Pass the request to the correct handler
  // });
  app.use('/web',WebApp);
  app.use('/software',SoftwareApp);
  // Start the server
  app.listen(4000, () => {
    console.log('listening on *:4000');
  });
  
}
