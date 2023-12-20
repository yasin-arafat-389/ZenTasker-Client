import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthContext from "./Context/AuthContext";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthContext>
  </React.StrictMode>
);
