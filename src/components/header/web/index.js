import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <i className="fi-rr-edit-alt option-icon"></i>project
        </a>
      </div>
      <div className="web-option">
        <a href="#skill">
          <i className="fi-rr-laptop option-icon"></i>
          skill
        </a>
      </div>
      <div className="web-option">
        <a href="work">
          <i className="fi-rr-briefcase option-icon"> </i>work
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i className="fi-rr-user option-icon"></i>contact
        </a>
      </div>
    </div>
  );
}

export default Web;
