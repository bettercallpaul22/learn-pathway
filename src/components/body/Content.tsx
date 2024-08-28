import React, { useEffect, useState } from "react";
import "./Content.scss";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { useDispatch } from "react-redux";
import { addToList, clearList } from "../../features/project_slice";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { DepartmentType, ProjectData } from "../../model";
import DescriptionIcon from "@mui/icons-material/Description";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Chip,
  Divider,
  dividerClasses,
  Grid,
  Pagination,
  Stack,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ProjectDetails from "../project_details/ProjectDetails";
import SearchItems from "../search_container/SearchItems";
import useScreenSize from "../../helper/screen_size";
import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { addSearchText } from "../../features/search_slice";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link, NavLink } from "react-router-dom";
import ComingSoon from "../comingSoon/ComingSoon";
// import { nursing_projects } from "../../data/data";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Content = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { width, height } = useScreenSize();
  const [searchInput, setSearchInput] = React.useState("");

  const isMobile = width < 768; // Mobile devices (width less than 768px)
  const isTablet = width >= 768 && width <= 1024; // Tablet devices (width between 768px and 1024px)
  const isDesktop = width > 1024; // Desktop devices (width greater than 1024px)
  const isMobileOrTablet = isMobile || isTablet; // True if the device is mobile or tablet

  const departments: DepartmentType[] = useSelector(
    (state: RootState) => state.department
  );

  const nursing_p = departments[0]?.projects || [];

  const projectsData: ProjectData[] = useSelector(
    (state: RootState) => state.projectReducer.projects
  );

  const searchText: string = useSelector(
    (state: RootState) => state.searchReducer.searchText
  );

  const [page, setPage] = React.useState(1);
  const projectsPerPage = isMobile ? 4 : 5;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const startIndex = (page - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = departments[0]?.projects.slice(startIndex, endIndex);

  // console.log("project lenth check", departments.)


  return (
    <div className="content-main-container">

      <h2 className="header-info">{departments[0]?.name}</h2>
    {departments[0].projects.length ? <div
        className="content-container"
        style={{ minWidth: isDesktop ? 700 : 0 }}
      >
        {currentProjects?.map((project) => (
          <Paper elevation={4} className="paper">
            <h5>{project.name}</h5>
            <NavLink
            state={{project}}
              to={`project-details/${project.name}`}
              style={{ backgroundColor: "darkcyan" }}
            >
              <Button variant="contained">View</Button>
            </NavLink>
          </Paper>
        ))}
      </div>

      :

      <div className="content-container">
        <ComingSoon/>
      </div>
      
    }
      <Stack
        spacing={2}
        style={{ backgroundColor: "" }}
        className="pagination-container"
      >
        <Pagination
          count={Math.ceil(nursing_p.length / projectsPerPage)}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="secondary"
        />
      </Stack>
    </div>
    //     <div
    //       className="content-container"
    //       style={{ margin: isMobile ? 0 : 50, marginTop: 20, backgroundColor:"teal" }}
    //     >

    // {/*
    //       {projects.length > 0 && searchText.length < 1 ? (
    //         <ProjectDetails />
    //       ) : searchText.length > 0 ? (
    //         <SearchItems />
    //       ) : (
    //         <div className="div" style={{}}>
    //           <div className="header-text">Student Projects</div>
    //           <div className="divider"></div>
    //           <p className="content-text">
    //             Commission a piece of specialist research or consultancy and benefit
    //             from the insight of our high-calibre students.
    //           </p>

    //           <h2 className="header-text">
    //             Benefits of Using our students projects
    //           </h2>
    //           <div className="benefits-container">
    //             <div className="benefits-children">
    //               <DoneOutlineIcon color="success" />
    //               <p>
    //                 <strong>Hands-On Learning Experience:</strong> Downloading the
    //                 projects provides a practical, hands-on way to understand key
    //                 concepts and techniques, reinforcing the theoretical knowledge
    //                 learned in class.
    //               </p>
    //             </div>
    //             <div className="benefits-children">
    //               <DoneOutlineIcon color="success" />
    //               <p>
    //                 <strong>Portfolio Building:</strong> These projects can be
    //                 showcased in a personal portfolio, demonstrating skills and
    //                 knowledge to potential employers or for academic purposes.
    //               </p>
    //             </div>

    //             <div className="benefits-children">
    //               <DoneOutlineIcon color="success" />
    //               <p>
    //                 <strong>Customizable Resources:</strong> Students can modify and
    //                 adapt the projects to suit their specific needs, allowing for
    //                 creative exploration and deeper learning.
    //               </p>
    //             </div>

    //             <div className="benefits-children">
    //               <DoneOutlineIcon color="success" />
    //               <p>
    //                 <strong>Time-Saving:</strong> Having access to well-documented,
    //                 ready-to-use projects saves time, offering a solid foundation to
    //                 build upon for further assignments or personal endeavors.
    //               </p>
    //             </div>

    //             <div className="benefits-children">
    //               <DoneOutlineIcon color="success" />
    //               <p>
    //                 <strong>Peer Learning and Collaboration:</strong> By downloading
    //                 projects from peers, students can learn from different
    //                 approaches and perspectives, enhancing their problem-solving
    //                 skills and fostering a collaborative learning environment.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       )} */}
    //     </div>
  );
};

export default Content;

{
  /* <Button
            color="error"
            className="dismiss-button"
            variant="outlined"
            endIcon={<ClearIcon />}
            onClick={() => {
              dispatch(clearList());
            }}
          >
            Close
          </Button> */
}

{
  /* <Chip className="dismiss-button" label="Clickable" variant="outlined" /> */
}
