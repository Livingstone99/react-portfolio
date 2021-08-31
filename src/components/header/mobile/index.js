import React from "react";
import "./mobile.css";

function Mobile({ IsOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!IsOpen)}>
        <i class="fi-rr-cross-circle close-icon"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <i className="fi-rr-edit-alt option-icon"></i>project
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skill">
            <i className="fi-rr-laptop option-icon"></i>
            skill
          </a>
        </div>
        <div className="mobile-option">
          <a href="work">
            <i className="fi-rr-briefcase option-icon"> </i>work
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i className="fi-rr-user option-icon"></i>contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
