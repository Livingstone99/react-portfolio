import React from "react";
import SocialContact from "../../../common/social-content";
import "./about.css";
import Typical from 'react-typical'

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="holder">
          <div className="about-info">
          <div className="stonestack">Hello There 👋 , this is <br />
          <span className="info-name">St💎neStack </span></div>
        </div>
        <div className="typy">
        <p className = 'doings'> 
            I develop with {''}
            <Typical
            loop={Infinity}
            
            wrapper='b'
            speed={400}
            steps={[
              'python🐍' ,  
              1000, 
              'javascript📍 ',
              1000,
              'dart🎯',
              1000,
              'scilab🧮 ',
              1000,
            ]} />
          </p>
        </div>
        </div>
        <div className="about-photo"></div>
        <img src={require("../../../assets/coding.png").default} className = "picture" alt="" />
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
// R@@x0Synergy1?
// 8127820880
// new pass = R@@x0synergy#$