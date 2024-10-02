import React from "react";
import logo from "../../assets/w3schools_logo.webp";
import searchimg from "../../assets/search.svg";
import "./Header.css";
import themebtn from "../../assets/theme.png";
import bluestar from "../../assets/star-blue.svg";
import hat from "../../assets/hat.svg";
import tag from "../../assets/tag.svg";
import trolly from "../../assets/trolly.svg";
const Header = () => {
  return (
    <div className="main-div">
      <header className="header">
        <nav className="f-nave">
          <div>
            {" "}
            <ul className="nav-upr-left">
              <li>
                <img src={logo} alt="img loading error" className="logo" />
              </li>
              <li>
                Tutorial
                <select></select>
              </li>
              <li>
                Exercise<select></select>
              </li>
              <li>
                Certificates<select></select>
              </li>
              <li>
                Services<select></select>
              </li>
              <li>
                <div className="search-div">
                  <input type="text" className="search" placeholder="Search" />
                  <div className="h-s-img-div">
                    <img
                      src={searchimg}
                      alt="search button"
                      className="search-img"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="theme-button">
                  <img
                    src={themebtn}
                    alt="theme"
                    className="theme-button-img"
                  />
                </div>
              </li>
            </ul>
          </div>
          <ul className="upr-scnd-nav">
            <li>
              <div className="plus">
                <img src={bluestar} className="blue-star" />
                <p className="plus-txt">Plus</p>
              </div>
            </li>
            <li>
              <div className="hat-txt">
                <img src={hat} className="hat" />
                <p>For Teachers</p>
              </div>
            </li>
            <li>
              <div className="spaces">
                <img src={tag} className="tag" />
                <p>Spaces</p>
              </div>
            </li>
            <li>
              <div className="verified">
                <img src={trolly} className="trolly" />
                <p>Get Verified</p>
              </div>
            </li>
            <li>
              <div className="login">
                <button className="s-btn">Sign Up</button>
                <button className="l-btn">Login</button>
              </div>
            </li>
          </ul>
        </nav>
        <nav className="scnd-nav">
          <ul className="scnd-nave-ul">
            <li>
              <a href="https://www.w3schools.com/html/default.asp">HTML</a>
            </li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>SQL</li>
            <li>PYTHON</li>
            <li>JAVA</li>
            <li>PHP</li>
            <li className="how-to">HOW TO</li>
            <li>W3.CSS</li>
            <li>C</li>
            <li>C++</li>
            <li>C#</li>
            <li>BOOTSTRAP</li>
            <li>REACT</li>
            <li>MYSQL</li>
            <li>JQUERY</li>
            <li>EXCEL</li>
            <li>XML</li>
            <li>DJANGO</li>
            <li>NUMPY</li>
            <li>PANDAS</li>
            <li>NODEJS</li>
            <li>R</li>
            <li>TYPESCRIPT</li>
            <li>ANGULAR</li>
            <li>GIT</li>
            <li>POSTGRESQL</li>
            <li>MONGODB</li>
            <li>ASP</li>
            <li>AI</li>
            <li>GO</li>
            <li>KOTLIN</li>
            <li>SASS</li>
            <li>VUE</li>
            <li>DSA</li>
            <li>GEN</li>
            <li>AI</li>
            <li>SCIPY</li>
            <li>AWS</li>
            <li>CYBERSECURITY</li>
            <li className="data-science">DATA SCIENCE</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
