import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";

import * as bootstrap from "bootstrap";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
