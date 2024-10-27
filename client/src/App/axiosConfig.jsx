import axios from 'axios';

const axiosInstanceApp = axios.create({
  baseURL: 'http://localhost:4000/software/api',// Change this to your API base URL
  withCredentials: true, // Include credentials in requests 
  //process.env.REACT_APP_BASE_URL ||
}); 

export default axiosInstanceApp;