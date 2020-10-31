import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Typical from 'react-typical';
import PortfolioContext from '../../context/context';
import myImg from '../../images/profile1.png';
import './Home.css';

const Home = () => {
  const { hero, footer } = useContext(PortfolioContext);
  const { title, name, cta } = hero;
  const { networks } = footer;

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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="about-wrapper__image">
            <img className="d-block mx-auto my-3 my-img" src={myImg} alt="" />
          </div>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title mb-3">
            {title} <span className="text-color-main">{name}</span>
          </h1>
          <Typical
            className="text-white h3 mb-3"
            steps={[
              'Front End',
              2500,
              'Front End Developer',
              500,
              'Front End Developer | Programmer',
              500,
              'Front End Developer | Programmer | Engineering Student',
              500,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div className="social-links">
            {networks &&
              networks.map((network) => {
                const { id, iconName, url } = network;
                return (
                  <a
                    key={id}
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={iconName}
                  >
                    <i
                      style={{ backgroundColor: '#03b2af', borderRadius: '50%', padding: '1rem' }}
                      className={`fa fa-${iconName || 'refresh'} fa-inverse`}
                    />
                  </a>
                );
              })}
          </div>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="https://drive.google.com/file/d/1E7M5WalMdJljc_rj_Ojl0dmvfxj7I338/view?usp=sharing">
                {cta}
              </Link>
            </span>
            <span className="cta-btn cta-btn--hero">
              <Link to="contact" smooth duration={1000}>
                Send Message
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Home;
