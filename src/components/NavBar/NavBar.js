/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';
import logo from '../../images/favicon.png';

const NavBar = () => {
  return (
    <nav id='navBar' className="navbar navbar-expand-md navbar-light navbar-dark">
      <Link className="navbar-brand" to="/">
        <img className='w-25 d-block mr-auto rounded-circle' src={logo} alt="" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="projects" smooth duration={1000}>Project</Link>
          <Link className="nav-link" to="about" smooth duration={1000}>About</Link>
          <Link className="nav-link" to="Blog" smooth duration={1000}>Blog</Link>
          <Link className="nav-link" to="contact" smooth duration={1000}>Contact</Link>
          <Link className="nav-link" to="https://drive.google.com/file/d/1E7M5WalMdJljc_rj_Ojl0dmvfxj7I338/view?usp=sharing">
            <button className="btn btn-outline-danger">Resume</button>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
