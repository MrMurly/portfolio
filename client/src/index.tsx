
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Project } from "./components/project";
import { Projects } from "./components/projects";
import "./index.css";
import { ProjectPage } from "./routes/project-page";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectPage/>,
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

