import React from "react";
import "./Home.scss";
import SideMenu from "../../components/sidemenu/SideMenu";
import Content from "../../components/body/Content";
import RightSideMenu from "../../components/rightsidemenu/RightSideMenu";
import useScreenSize from "../../helper/screen_size";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const Home = () => {
  const { width, height } = useScreenSize();

  const isMobile = width < 768; // Mobile devices (width less than 768px)
  const isTablet = width >= 768 && width <= 1024; // Tablet devices (width between 768px and 1024px)
  const isDesktop = width > 1024; // Desktop devices (width greater than 1024px)

  const isMobileOrTablet = isMobile || isTablet; // True if the device is mobile or tablet
  const isTabletOrDesktop = isDesktop || isTablet; // True if the device is mobile or tablet

  return (
    <div
      className={isMobileOrTablet ? "home2" : "home"}
      style={{
        marginLeft: isMobile ? 20 : 50,
        marginRight: isMobile ? 20 : 50,
      }}
    >
      {isDesktop && <SideMenu />}
      {isTabletOrDesktop && <Content />}
     { isMobile &&(<div className="mobile-content">
        <div
          className="m-content-container"
          // style={{ margin: isMobile ? 0 : 50, marginTop: 20, backgroundColor:"teal" }}
        >
          <div className="div" style={{}}>
            <div className="header-text">Student Projects</div>
            <div className="divider"></div>
            <p className="content-text">
              Commission a piece of specialist research or consultancy and
              benefit from the insight of our high-calibre students.
            </p>

            <h2 className="header-text">
              Benefits of Using our students projects
            </h2>
            <div className="benefits-container">
              <div className="benefits-children">
                <DoneOutlineIcon color="success" />
                <p>
                  <strong>Hands-On Learning Experience:</strong> Downloading the
                  projects provides a practical, hands-on way to understand key
                  concepts and techniques, reinforcing the theoretical knowledge
                  learned in class.
                </p>
              </div>
              <div className="benefits-children">
                <DoneOutlineIcon color="success" />
                <p>
                  <strong>Portfolio Building:</strong> These projects can be
                  showcased in a personal portfolio, demonstrating skills and
                  knowledge to potential employers or for academic purposes.
                </p>
              </div>

              <div className="benefits-children">
                <DoneOutlineIcon color="success" />
                <p>
                  <strong>Customizable Resources:</strong> Students can modify
                  and adapt the projects to suit their specific needs, allowing
                  for creative exploration and deeper learning.
                </p>
              </div>

              <div className="benefits-children">
                <DoneOutlineIcon color="success" />
                <p>
                  <strong>Time-Saving:</strong> Having access to
                  well-documented, ready-to-use projects saves time, offering a
                  solid foundation to build upon for further assignments or
                  personal endeavors.
                </p>
              </div>

              <div className="benefits-children">
                <DoneOutlineIcon color="success" />
                <p>
                  <strong>Peer Learning and Collaboration:</strong> By
                  downloading projects from peers, students can learn from
                  different approaches and perspectives, enhancing their
                  problem-solving skills and fostering a collaborative learning
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>)}
      {isDesktop && <RightSideMenu />}
    </div>
  );
};

export default Home;
