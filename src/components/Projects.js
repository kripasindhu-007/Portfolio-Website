import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/digit-recog_519x380.png";
import projImg2 from "../assets/img/math.jpg";
import projImg3 from "../assets/img/movie_519x380.jpg";
import projImg4 from "../assets/img/tic_tac_toe_dribbble_4x_519x380.png";
import projImg5 from "../assets/img/calculator_519x380.png";
import projImg6 from "../assets/img/choice_519x380.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Digit Recognition",
      description: "Machine Learning",
      imgUrl: projImg1,
      link: "https://github.com/kripasindhu-007/Machine-Learning/tree/main/Digit%20Recognition"
    },
    {
      title: "Math App",
      description: "Python, KivyMD",
      imgUrl: projImg2,
      link:"https://github.com/kripasindhu-007/Math-Quiz"
    },
    {
      title: "Movie Recomendation",
      description: "ReactJS,MovieAPI",
      imgUrl: projImg3,
      link:"https://github.com/kripasindhu-007/MovieWorld"
    },
    {
      title: "Tic-Tac-Toe",
      description: "Python Development",
      imgUrl: projImg4,
      link:"https://github.com/kripasindhu-007/Tic-Tac-Toe"
    },
    {
      title: "Calculator",
      description: "HTML, CSS, JavaScript",
      imgUrl: projImg5,
      link:"https://github.com/kripasindhu-007/Calculator"
    },
    {
      title: "Choice Selector",
      description: "HTML, CSS, JavaScript",
      imgUrl: projImg6,
      link:"https://github.com/kripasindhu-007/Choice-Selector"
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> I have been creating projects from my 1st year of college. Here you can see some of works which ranges from a basic calculator using HTML and CSS to building a machine learning model using tenserflow and keras.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
