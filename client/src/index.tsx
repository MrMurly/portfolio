
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Project } from "./components/project";
import { Projects } from "./components/projects";
import "./index.css";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Project id="63aadc24f5ea4ae6bd02ec48"/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

