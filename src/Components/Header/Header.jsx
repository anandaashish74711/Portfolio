import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <section id="about">
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Aashish Anand</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
      

          <div className="header__me">
            <img src={ME} alt="meto" />
          </div>
          <HeaderSocial />
          <a href="#Contacts" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </section>
  );
};

export default Header;
