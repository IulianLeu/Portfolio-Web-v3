import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing websites and apps with Figma</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Clear minimalistic interface for any user</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Fully transparent to client wishes</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Perfect visual illustration of future projects</p>
            </li>

          </ul>
        </article>
        {/*END OF UI/UX*/}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-End Development</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Basic Back-End Development</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Clean and readable code</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Perfectly optimized website for all devices</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Debugging and testing</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Connecting all things together</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Adding any kind of content on your website or app</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Editing any kind of content on your website or app</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Personal Dashboard for simplicity of work with data</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Helpful tools to manage your website or app</p>
            </li>

          </ul>
        </article>
        {/*END OF CONTENT CREATION*/}

      </div>
    </section>
  )
};

export default Services;
