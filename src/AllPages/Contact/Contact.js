import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';
import PortfolioContext from '../../context/context';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <section id="contact" style={{ backgroundColor: '#343a40' }}>
      <Container>
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email && `mailto:${email}`}
            >
              {btn}
            </a>
          </div>
        </Fade>
        <section className="footer mt-5 mb-0 pb=0">
          <span className="back-to-top">
            <Link to="#" smooth duration={1000}>
              <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
            </Link>
          </span>
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
          <p className="footer__text">
            © {new Date().getFullYear()} -{' '}
            <a
              href="https://drive.google.com/file/d/1XZh02RChE1sY9OxvMjW7tHAedjNXi0vr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 style={{ marginBottom: '0', backgroundColor: '#343a40' }}>The Web GuY</h3>
            </a>
          </p>
        </section>
      </Container>
    </section>
  );
};

export default Contact;
