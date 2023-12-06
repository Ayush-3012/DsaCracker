/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { SnackbarProvider } from "notistack";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SnackbarProvider
      maxSnack={2}
      autoHideDuration={1000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);
