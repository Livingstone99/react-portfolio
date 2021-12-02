import React, { useState } from "react";
import Mobile from "./mobile";
import Web from "./web";
import './header.css';
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
// register lottie and define custom element
defineLordIconElement(loadAnimation);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
   <i class="fi-rr-home logo"></i>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fi-rr-apps menu-icon"></i>
            {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
