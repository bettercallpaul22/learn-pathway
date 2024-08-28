import React from 'react'
import "./MobileContent.scss"
import Paper from "@mui/material/Paper";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { DepartmentType, ProjectData } from "../../model";
import { useDispatch } from "react-redux";
import useScreenSize from '../../helper/screen_size';
import { Button, Pagination, Stack } from '@mui/material';


const MobileContent = () => {
    const location = useLocation();
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

    const departments = location.state.mobileState as any;


  
    // const departments: DepartmentType[] = useSelector(
    //   (state: RootState) => state.department
    // );
  
    const nursing_p = departments?.projects || [];
  
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
    const currentProjects = departments?.projects.slice(startIndex, endIndex);
  
//   console.log("department usage", departments)
  console.log("department new", departments)
  return (
    <div className="mobile-content-main-container">
    <h2 className="header-info">{departments?.name}</h2>
    <div
      className="content-container"
      style={{}}
    >
      {currentProjects?.map((project:ProjectData) => (
        <Paper elevation={4} className="paper">
          <h5>{project.name}</h5>
          <NavLink
          state={{project}}
            to={`project-details/mobile-project-details/${project.id}`}
            style={{ backgroundColor: "darkcyan" }}
          >
            <Button
            onClick={()=>{
                console.log("projectDetails", project.name)
            }}
            variant="contained">View</Button>
          </NavLink>
        </Paper>
      ))}
    </div>
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
  )
}

export default MobileContent
