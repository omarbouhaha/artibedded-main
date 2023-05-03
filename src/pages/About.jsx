import {Grid} from "@mui/material";
import React from "react";
import CardAbout from "../components/cardAbout/CardAbout";
import {abouts} from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import Typewriter from "typewriter-effect";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="left-about-header">
          <div className="text-left-about">
            <p className="title-about">
              {" "}
              <Typewriter
                options={{ cursor:" ?"
                }}
                 onInit={(typewriter) => {
                  typewriter.typeString('WHO ARE WE')
                   
                    
                    .start();
                }}
            
              />
            </p>
            <p className="text-description-about">
              We Are Highly Skilled Group Of Engineers And Technicians With
              Different Backgrounds And Having The Same Purpose !
            </p>
            <h3>”Give You The Finest Solution“</h3>{" "}
           <div style={{display:"flex", justifyContent:"flex-end"}}> <a href="/" className="bn13">Meet Our Team    <ArrowForwardIosIcon className="arrow" /> </a>   </div>
          </div>
        </div>
        <div className="right-about-header"></div>
      </div>
      <div className="about-content">
        </div>
    </div>
  );
};

export default About;
