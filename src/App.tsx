import React from "react";
import { Link, RouterProvider } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter } from "react-router-dom";
import DrawerAppBar from "./components/Navbar/AppBar";
import SearchAppBar from "./components/Navbar/AppBar";
import Project from "./pages/project/Project";
import TestPage from "./pages/TestPage";
import About from "./pages/about/About";
import ProjectDetails from "./pages/projectDetails/ProjectDetails";
import MobileContent from "./components/content/MobileContent";
import ProjectDetailsMobile from "./pages/projectDetails/ProjectDetailsMobile";

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <SearchAppBar />
        <Home />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
    },
    {
      // make it dynamic with id to project details page
      path: "project-details/:projectId",
      element: <ProjectDetails/>
    },
    {
      // make it dynamic with id to project details page
      path: "project-details",
      element: <MobileContent/>
    },
    {
      // make it dynamic with id to project details page
      path: "project-details/project-details/mobile-project-details/:id",
      element: <ProjectDetails/>
    },
    // project-details/project-details/mobile-project-details/1
  ]);



  return <RouterProvider router={router} />;
};

export default App;
