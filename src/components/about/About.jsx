import React from 'react';
import './about.css';
import ME from '../../assets/me-about-2.jpg';
import {FaLaptopCode} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {BsFolderCheck} from 'react-icons/bs';

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years in IT</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>-- -- --</small>
            </article>

            <article className="about__card">
              <BsFolderCheck className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>I am an energetic, ambitious person
who has developed a mature and
responsible approach to any task that
I undertake, or situation that I am
presented with. I have good personal
experience in web development,
strongly updated every day with new
ideas and practical skills.</p>
          <p>I am currently looking for an
opportunity to utilize my technical skills
in a challenging working environment
and become a valuable asset to the
organization that I work for.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>

    </section>
  )
};

export default About;
