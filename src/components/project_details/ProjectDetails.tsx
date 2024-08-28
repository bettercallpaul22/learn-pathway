import React from "react";
import "./ProjectDetails.scss";
import { Backdrop, Button, Chip, Fab, Fade, Modal } from "@mui/material";
import { ProjectData } from "../../model";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { clearSearch } from "../../features/search_slice";
import { clearList } from "../../features/project_slice";
import useScreenSize from "../../helper/screen_size";
import DescriptionIcon from "@mui/icons-material/Description";

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { width, height } = useScreenSize();

  const projects: ProjectData[] = useSelector(
    (state: RootState) => state.projectReducer.projects
  );

  const project = projects[0];

  const handleResetState = () => {
    dispatch(clearSearch());
    dispatch(clearList());
  };

  const isMobile = width < 768; // Mobile devices (width less than 768px)
  const isTablet = width >= 768 && width <= 1024; // Tablet devices (width between 768px and 1024px)
  const isDesktop = width > 1024; // Desktop devices (width greater than 1024px)

  const isMobileOrTablet = isMobile || isTablet; // True if the device is mobile or tablet

  return (
    <div className="project-details-container">
      <Fab
        onClick={handleResetState}
        className="dismiss-button"
        color="error"
        aria-label="edit"
      >
        <CloseIcon />
      </Fab>
      {isDesktop && (
        <Button
          variant="contained"
          endIcon={<DescriptionIcon />}
          onClick={handleOpen}
        >
          Get Project Document
        </Button>
      )}
      <div className="container">
        <div className="card">
          <h2 className="project-name">{project?.name}</h2>
          <div className="project-details">
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
        {/* <Button
      onClick={handleOpen}
      variant="contained"
      endIcon={<DescriptionIcon />}
    >
      Get Project Document
    </Button> */}
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              minHeight: 400,
              minWidth: 400,
              backgroundColor: "white",
              borderRadius: 5,
              boxShadow:
                "2px 11px 30px -2px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)",
              padding: 20,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {projects[0].name}
            </div>
            <div
              style={{
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              File Format: PDF
            </div>
            <div
              style={{
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              Delivery Duration: 24 hours
            </div>

            <div
              style={{
                backgroundColor: "#f8f9fa",
                padding: "10px",
                borderRadius: 5,
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Price
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
              >
                ₦{project.project_price}
              </div>
            </div>

            <div
              style={{
                textAlign: "left",
                marginBottom: "20px",
              }}
            >
              <div>
                <strong>Payment Details:</strong>
              </div>
              <div>Account Name: Obaro Paul</div>
              <div>Account Number: 0004027851</div>
              <div>Email: obaroiskool@gmail.com</div>
              <div>Contact Number: +2348148208056</div>
            </div>

            <div
              style={{
                textAlign: "left",
                backgroundColor: "#e9ecef",
                padding: "15px",
                borderRadius: 5,
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Payment Instructions:
              </div>
              <div>
                <p>
                  Thank you for your payment. Please follow these steps to
                  complete the process:
                </p>
                <ol>
                  <li>
                    After making the payment, kindly take a screenshot or save
                    the payment receipt.
                  </li>
                  <li>
                    Send the payment receipt to our email:{" "}
                    <strong>obaroiskool@gmail.com</strong>.
                  </li>
                  <li>
                    Include your name, the project name, and the payment amount
                    in the email body.
                  </li>
                  <li>
                  Once we receive your receipt, we will confirm your payment
                    and proceed with the next steps of receiving your project
                    document in the next 24h.
                  </li>
                </ol>
                <p>
                  If you have any questions, feel free to contact us at{" "}
                  <strong>+2348148208056</strong>.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProjectDetails;
