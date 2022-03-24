import React from "react";
import "../styles/aboutus.css";
import fbimg from '../assests/facebook.svg';
import instaimg from '../assests/instagram.svg';
import linkedimg from '../assests/linkedin.svg';

const About = () => {
  return (
    <>
      <section className="About">
        <div className="AboutUS">
          <h1>About us</h1>
          <h3>Doorstep Wash & Dryclean Service</h3>
        </div>
        <div className="Home">
          <h1>Home</h1>
          <h3>Sign In</h3>
          <h3>Register</h3>
        </div>
        <div className="Price">
          <h1>Pricing</h1>
        </div>
        <div className="Career">
          <h1>Career</h1>
          <h3>Blogs</h3>
          <h3>Create</h3>
        </div>
        <div className="Contact">
          <h1>Contact</h1>
        </div>
        <div className="SocialMedia">
          <h1>SOCIAL MEDIA</h1>
          <div className="SocialMediaIcon">
            <img
              src={fbimg}
              alt="facebook"
            ></img>
            <img src={instaimg} alt="insta"></img>
            <img src={linkedimg} alt="linkedinx"></img>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
