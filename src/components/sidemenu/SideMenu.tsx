import React from "react";
import "./SideMenu.scss";
import { nursing_projects } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { addToList } from "../../features/project_slice";
import { DepartmentType, ProjectData } from "../../model";
import { RootState } from "../../features/store";
import { Pagination, Stack, Typography } from "@mui/material";
import { clearSearch } from "../../features/search_slice";
import { departments } from "../../data/department";
import { addDeptToList } from "../../features/dept_slice";


const SideMenu = () => {
  const dispatch = useDispatch();
  const projectsData: ProjectData[] = useSelector(
    (state: RootState) => state.projectReducer.projects
  );

  const depts:DepartmentType[] = useSelector((state:RootState)=>state.department)

console.log("department", depts)

  const [page, setPage] = React.useState(1);
  const projectsPerPage = 5; // Number of projects to display per page

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleAddProject = (dept: DepartmentType) => {

    
    
    // const newProject = {
    //   id: project.id,
    //   name: project.name,
    //   project_year: project.project_year,
    //   project_description: project.project_description,
    //   project_price: project.project_price,
    //   content: {
    //     backround_of_study: {
    //       paragraph1: project.content.backround_of_study.paragraph1,
    //       paragraph2: project.content.backround_of_study.paragraph2,
    //       paragraph3: project.content.backround_of_study.paragraph3,
    //       paragraph4: project.content.backround_of_study.paragraph4,
    //     },
    //     objective_of_study: {
    //       paragraph1: project.content.objective_of_study.paragraph1,
    //       paragraph2: project.content.objective_of_study.paragraph2,
    //       paragraph3: project.content.objective_of_study.paragraph3,
    //       paragraph4: project.content.objective_of_study.paragraph4,
    //     },
    //     research_question: {
    //       paragraph1: project.content.research_question.paragraph1,
    //       paragraph2: project.content.research_question.paragraph2,
    //       paragraph3: project.content.research_question.paragraph3,
    //       paragraph4: project.content.research_question.paragraph4,
    //     },
    //     reference: {
    //       paragraph1: project.content.reference.paragraph1,
    //       paragraph2: project.content.reference.paragraph2,
    //       paragraph3: project.content.reference.paragraph3,
    //       paragraph4: project.content.reference.paragraph4,
    //     },
    //   },
    // };

    dispatch(addDeptToList(dept));
  };

  const startIndex = (page - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = nursing_projects.slice(startIndex, endIndex);
const primary_color = "#DC143C"



const departmentsSliceArr: DepartmentType[] = useSelector(
  (state: RootState) => state.department
);







  return (
    <div className="">

    <div className="left-side-menu">
      <div className="side-menu-header">STUDENT PROJECTS</div>
      <div className="div">
        {departments.map((dept) => (
          <div
            key={dept.id} // Add a key prop for better rendering
            // className={ "side-sub-menu"}
            className={
              departmentsSliceArr[0]?.id !== dept.id
                ? "side-sub-menu"
                : "side-sub-menu-s"
            }
            onClick={() => {
              dispatch(clearSearch())
              handleAddProject(dept);
            }}
          >
            {dept.name}
          </div>
        ))}
      </div>
    
    </div>
      {/* <Stack spacing={2} style={{backgroundColor:""}}>
        <Pagination
          count={Math.ceil(projects.length / projectsPerPage)}
          page={page}
          onChange={handleChange}
          variant="outlined" 
          color="secondary"
        />
      </Stack> */}
    </div>
  );
};

export default SideMenu;
