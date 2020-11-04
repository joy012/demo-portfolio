import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import img1 from '../../images/project1.jpg';
import img2 from '../../images/project2.jpg';
import img3 from '../../images/project3.jpg';
import img4 from '../../images/project4.jpg';
import img5 from '../../images/project5.jpg';
import './Project.css';

const allImg = [img1, img2, img3, img4, img5];

const Project = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <h2 className="text-center display-3 my-5 py-5 font-weight-bold">Projects</h2>
          {projects.map((project, index) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
              <Row className="d-flex flex-lg-row flex-column-reverse" key={id}>
                <Col lg={5} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>{info}</p>
                        <p className="mb-4">
                          {info2.map((btnInfo) => (
                            <span className="btn-skill btn btn-info my-2 mx-2">{btnInfo}</span>
                          ))}
                        </p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn-hero"
                        href={url}
                      >
                        Website
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn-hero"
                          href={repo}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={7} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <img className="rounded w-100" src={allImg[index]} alt="" />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default Project;
