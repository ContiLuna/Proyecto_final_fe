import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserStore from "./context/UserStore";
import { ReactNotifications } from 'react-notifications-component'
import 'animate.css/animate.min.css';
import 'animate.css/animate.compat.css';
import 'react-notifications-component/dist/theme.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserStore>
      <ReactNotifications />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserStore>
  </React.StrictMode>
);
