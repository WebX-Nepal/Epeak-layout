import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Everestdetails from "./pages/Everestdetails.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <Navbar/> */}
      <Routes>
        <Route element={<App />} path="/"></Route>
        <Route element={<Everestdetails/>} path="/everest"></Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
