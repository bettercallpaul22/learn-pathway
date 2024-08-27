import React from "react";
import "./ProjectDetailsMobile.scss";
import { Backdrop, Chip, Fab, Fade, Modal } from "@mui/material";
import { ProjectData } from "../../model";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { clearSearch } from "../../features/search_slice";
import { clearList } from "../../features/project_slice";

interface Projects {
  project: ProjectData;
}

const ProjectDetailsMobile: React.FC<Projects> = ({ project }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const projects: ProjectData[] = useSelector(
  //   (state: RootState) => state.projectReducer.projects
  // );

  // const project = projects[0];

  const handleResetState = () => {
    dispatch(clearSearch());
    dispatch(clearList());
  };
  console.log("project --->", project);

  return (
    <div className="project-details-container-m" style={{}}>
      <div className="container">
        <div className="card">
          <h1 className="project-name" >{project.name}</h1>
          <div className="project-details" style={{ paddingLeft:"10px", paddingRight:"10px"}}>
          <h2>Background Of Study:</h2>
          <p>{project.content.backround_of_study.paragraph1}</p>
          <p>{project.content.backround_of_study.paragraph2}</p>
          <p>{project.content.backround_of_study.paragraph3}</p>
          <p>{project.content.backround_of_study.paragraph4}</p>
          <h2>Objective Of The Study:</h2>
          <div className="paragraph-container">
          {project.content.objective_of_study.paragraph1 && (
              <p style={{}}>
                &#x2022; {project.content.objective_of_study.paragraph1}
              </p>
            )}
          </div>
          <div className="paragraph-container">
          {project.content.objective_of_study.paragraph2 && (
              <p style={{}}>
                &#x2022; {project.content.objective_of_study.paragraph2}
              </p>
            )}
          </div>
          <div className="paragraph-container">
          {project.content.objective_of_study.paragraph3 && (
              <p style={{}}>
                &#x2022; {project.content.objective_of_study.paragraph3}
              </p>
            )}
          </div>
          <div className="paragraph-container">
            {project.content.objective_of_study.paragraph4 && (
              <p style={{}}>
                &#x2022; {project.content.objective_of_study.paragraph4}
              </p>
            )}
          </div>

          <h2>Research Questions:</h2>
          <div className="paragraph-container">
          {project.content.research_question.paragraph1 && (
              <p style={{}}>
                &#x2022; {project.content.research_question.paragraph1}
              </p>
            )}
          </div>
          <div className="paragraph-container">
          {project.content.research_question.paragraph2 && (
              <p style={{}}>
                &#x2022; {project.content.research_question.paragraph2}
              </p>
            )}
          </div>
          <div className="paragraph-container">
          {project.content.research_question.paragraph3 && (
              <p style={{}}>
                &#x2022; {project.content.research_question.paragraph3}
              </p>
            )}
          </div>
          <div className="paragraph-container">
            {project.content.research_question.paragraph4 && (
              <p style={{}}>
                &#x2022; {project.content.research_question.paragraph4}
              </p>
            )}
          </div>
          <h2>Reference:</h2>
          <p>{project.content.reference.paragraph1}</p>
          <p>{project.content.reference.paragraph2}</p>
          <p>{project.content.reference.paragraph3}</p>
          <p>{project.content.reference.paragraph4}</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsMobile;
