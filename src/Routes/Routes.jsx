import { createBrowserRouter } from "react-router";

import RootLayout from "../Layouts/RootLayout";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/all-apps", Component: AllApps },
      { path: "/installation", Component: Installation },
      { path: "/AppDetails/:id", Component: AppDetails },
      { path: "*", Component: ErrorPage },
    ],
  },
]);
