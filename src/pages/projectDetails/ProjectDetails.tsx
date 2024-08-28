import React from "react";
import { DepartmentType, ProjectData } from "../../model";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchAppBar from "../../components/Navbar/AppBar";
import "./ProjectDetails.scss";
import { Button, Fab, Fade } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import CloseIcon from "@mui/icons-material/Close";

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state.project as ProjectData;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="project-details-main">
      <SearchAppBar />
      <div className="content">
        <div className="left-side">
          <Button
            variant="contained"
            endIcon={<DescriptionIcon />}
            onClick={handleOpen}
          >
            Get Project Document
          </Button>
        </div>
        <div style={styles.container}>
          <h1 style={styles.title}>{project.name}</h1>
          <section style={styles.backgroundStudy}>
            <h2>Background Of Study:</h2>
            <p>{project.content.backround_of_study.paragraph1}</p>
            <p>{project.content.backround_of_study.paragraph2}</p>
            <p>{project.content.backround_of_study.paragraph3}</p>
            <p>{project.content.backround_of_study.paragraph4}</p>
            <h2>Objective Of The Study:</h2>

            <ul>
              {project.content.objective_of_study.paragraph1 && (
                <li>{project.content.objective_of_study.paragraph1}</li>
              )}
              {project.content.objective_of_study.paragraph2 && (
                <li>{project.content.objective_of_study.paragraph2}</li>
              )}
              {project.content.objective_of_study.paragraph3 && (
                <li>{project.content.objective_of_study.paragraph3}</li>
              )}
              {project.content.objective_of_study.paragraph4 && (
                <li>{project.content.objective_of_study.paragraph4}</li>
              )}
            </ul>
            <h2>Research Questions:</h2>
            <ul>
              {project.content.research_question.paragraph1 && (
                <li>{project.content.research_question.paragraph1}</li>
              )}
              {project.content.research_question.paragraph2 && (
                <li>{project.content.research_question.paragraph2}</li>
              )}
              {project.content.research_question.paragraph3 && (
                <li>{project.content.research_question.paragraph3}</li>
              )}
              {project.content.research_question.paragraph4 && (
                <li>{project.content.research_question.paragraph4}</li>
              )}
            </ul>
          </section>
          <section style={styles.references}>
            <h2>References</h2>
            <ul>
              {project.content.reference.paragraph1 && (
                <li>{project.content.reference.paragraph1}</li>
              )}
              {project.content.reference.paragraph2 && (
                <li>{project.content.reference.paragraph2}</li>
              )}
              {project.content.reference.paragraph3 && (
                <li>{project.content.reference.paragraph3}</li>
              )}
              {project.content.reference.paragraph4 && (
                <li>{project.content.reference.paragraph4}</li>
              )}
            </ul>
          </section>
        </div>
      </div>
      <Footer />
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
          <Fab
          style={{
            position:"absolute",
            right:20

          }}
            onClick={() => {
              handleClose();
            }}
            className="dismiss-button"
            color="error"
            aria-label="edit"
          >
            <CloseIcon />
          </Fab>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {project.name}
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
                  After making the payment, kindly take a screenshot or save the
                  payment receipt.
                </li>
                <li>
                  Send the payment receipt to our email:{" "}
                  <strong>obaroiskool@gmail.com</strong>.
                </li>
                <li>
                  Include your name, the project name, and the payment amount in
                  the email body.
                </li>
                <li>
                  Once we receive your receipt, we will confirm your payment and
                  proceed with the next steps of receiving your project document
                  in the next 24h.
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
    </div>
  );
};

export default ProjectDetails;
const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  backgroundStudy: {
    marginBottom: "20px",
  },
  references: {
    listStyleType: "disc",
    paddingLeft: "20px",
  },
};
