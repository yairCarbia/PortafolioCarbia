import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";

import colorSharp2 from "../../assets/img/color-sharp2.png";
import googleProject from "../../assets/img/google-proyecto.jpeg"
import futbolTrue from "../../assets/img/FutbolTrue.jpeg";
import CarbiaMotors from "../../assets/img/CarbiaMotorsReact.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./_projects.scss"
import Experiencia from "../Experiencia/Experiencia";
export const Projects = () => {

  const projects = [
    {
      title: "Futbol=TRUE!",
      description: "HTML,CSS3,SASS,JavaScript",
      imgUrl: futbolTrue,
      git: "https://github.com/yairCarbia/Futbol-True-JavaScript/tree/carbiaFutbol/FUTBOL-JS"
    },
    {
      title: "Carbia Motors",
      description: "HTML,Bootstrap,SASS,JavaScript,React Js,Formik,Yup,sweetAlert2,react-swipeable-list",
      imgUrl: CarbiaMotors,
      url: "https://yaircarbia.github.io/CarbiaMotorsReactJS/",
      git: "https://github.com/yairCarbia/CarbiaMotorsReactJS"
    },
    {
      title: "Proyecto Google!",
      description: "Tailwind Css, React JS, Next.js ",
      imgUrl: googleProject,
      url: "https://google-project-topaz.vercel.app/",
      git: "https://github.com/yairCarbia/google-project"
    }
    // 
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Mis proyectos y experiencia.</h2>
                  <p>En esta seccion se encuentran mis proyectos realizados, podes visitarlos !</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Proyectos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experiencia</Nav.Link>
                      </Nav.Item>

                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Experiencia />
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="third">
                        <p>Hola</p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" loading="lazy" src={colorSharp2}></img>
    </section>
  )
}
