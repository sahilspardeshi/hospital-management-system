import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import appStore from './App/redux/store.js'; // App store
import websiteStore from './website/redux/store.js'; // Website store
import { ToastContainer } from 'react-toastify';

const hostname = window.location.hostname;

// Check if we're on localhost, custom domain, or production domain
const isLocalHost = hostname === 'localhost';
const isProductionDomain = hostname === 'example.com'; // Actual production domain

// Choose the store based on the condition
const selectedStore = isLocalHost || isProductionDomain ? websiteStore : appStore;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={selectedStore}>
      <App />
      <ToastContainer />
    </Provider>
  </StrictMode>
);
