import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/ReduxStore";
import App from "./App";
import "./index.css";

// Find the element you want to render your React app into
const container = document.getElementById("root");

// Create a root
const root = createRoot(container); // Create a root instance

// Use the root instance to render your React element
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
