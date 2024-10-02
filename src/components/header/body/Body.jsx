import React from "react";
import bgimg from "../../../assets/background.webp";
import "./Body.css";
import searchimg from "../../../assets/search.svg";
import sqrlimg from "../../../assets/lynx.png";
function Body() {
  return (
    <div className="">
      <div>
        <img src={sqrlimg} alt="error" className="sqrl-img" />
      </div>
      <div className="bg-img">
        <div className="body-text">
          <h1 className="heading-t">Learn to Code</h1>
          <h3 className="scnd-text">
            With the world's largest web developer site.
          </h3>
          <div className="searchb-div">
            <input type="text" className="searchb" placeholder="search" />
            <div className="sb-img-div">
              <img
                src={searchimg}
                alt="search button"
                className="searchb-img"
              />
            </div>
          </div>
          <h3>
            <a
              href="https://www.w3schools.com/where_to_start.asp"
              className="link"
            >
              Not Sure Where To Begin?
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Body;
