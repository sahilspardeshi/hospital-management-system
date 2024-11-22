import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as AppProvider } from 'react-redux';
import { Provider as WebsiteProvider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import appStore from './App/redux/store.js'; // App store
import websiteStore from './website/redux/store.js'; // Website store
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider store={appStore}>
      {/* <WebsiteProvider store={websiteStore}> */}
        <App />
        <ToastContainer />
      {/* </WebsiteProvider> */}
    </AppProvider>
  </StrictMode>
);
