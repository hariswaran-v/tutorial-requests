import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CreateRequest from "./pages/CreateRequest.jsx";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GuestLayout from "./layouts/Guest.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/create",
        element: <CreateRequest />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
