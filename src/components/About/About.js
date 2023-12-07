import React from "react";
import "./About.css";
import Avatar from "../../images/avatar.png";

const About = () => {
  return (
    <div className="about">
      <img src={Avatar} alt="avatar" className="about__avatar" />
      <div className="about__section">
        <h1 className="avatar__title">About the author</h1>
        <div className="about__para">
          <p className="about__text">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
          </p>
          <p className="about__text">
            You can also talk about your experience with Practicum, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
