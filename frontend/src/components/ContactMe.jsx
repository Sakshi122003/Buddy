import React from 'react';
import "../assets/buy.css";

const ContactMe = () => {
  return (
    <div className="page-wrapper">
      <video autoPlay loop muted className="background-video">
        <source src="Buy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <h1>Let's Create Something Extraordinary!</h1>
        <p>If you're ready to turn your ideas into reality, fill out the form below and let's get started!</p>
        <form action="mailto:youremail@gmail.com" method="post" encType="text/plain">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required aria-label="Your Name" />
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required aria-label="Your Email" />
          <label htmlFor="company">Company Name:</label>
          <input type="text" id="company" name="company" aria-label="Company Name" />
          <label htmlFor="project">Tell me about your project:</label>
          <textarea id="project" name="project" required aria-label="Project Description"></textarea>
          <label htmlFor="deadline">Project Deadline:</label>
          <input type="date" id="deadline" name="deadline" aria-label="Project Deadline" />
          <input type="submit" value="Submit" />
        </form>
        
        <div className="social-links">
          <h2>Connect with me:</h2>
          <ul>
            <li>
              <a href="mailto:deliverys589@gmail.com" aria-label="Email">
                <img src="https://img.icons8.com/color/48/000000/gmail.png" alt="Email" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sakshi-p-597b8b235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Sakshi122003" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="GitHub" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;