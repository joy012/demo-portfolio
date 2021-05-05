import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';
import emailjs, { init } from 'emailjs-com';

import PortfolioContext from '../../context/context';
import './Contact.css';

init('user_541YLqgHK4Edya8LvhMAY');

const Contact = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleBlur = (e) => {
    const updateInfo = { ...userInfo };
    updateInfo[e.target.name] = e.target.value;
    setUserInfo(updateInfo);
  };

  

  return (
    <section id="contact" style={{ backgroundColor: '#343a40' }}>
      <Container>
        <Fade bottom duration={1000} delay={800} distance="30px">
          <h1 className="display-3 text-center contactH1">Get In Touch</h1>
          <div className="row px-5 align-items-center justify-content-center">
            <div className="col-lg-7 col-sm-10">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    onBlur={handleBlur}
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your email address"
                  />
                </div>
                <div className="form-group">
                  <input
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your name/ company's name"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    onBlur={handleBlur}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="8"
                    name="message"
                    placeholder="Your message..."
                  />
                </div>
                <input type="submit" className="btn btn-send px-5 send" value="Send" />
              </form>
            </div>
          </div>
        </Fade>
        <section className="footer mt-5 mb-0 pb=0">
          <span className="back-to-top">
            <Link to="#">
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
