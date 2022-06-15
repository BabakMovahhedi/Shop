import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import CartProviders from "./providers/CartProviders";
import { ToastContainer } from 'react-toastify';
import Layout from './Layout/Layout';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProviders>
  <BrowserRouter>
  <Layout>
  <ToastContainer/>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  </Layout>
  </BrowserRouter>   

  </CartProviders>

);


