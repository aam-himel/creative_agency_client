import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import heroSvg from "../../../../images/logos/Frame.png";
import "./Header.css";
const Header = () => {
  return (
    <header id="hero">
      <div className="container">
        <Navbar />
        <div className="row d-flex align-items-center h-500">
          <div className="col-md-5 mt-5">
            <h1 className="main-title pr-2 text-center-md">
              Let’s Grow Your Brand To The Next Level
            </h1>
            <p className="d-none d-sm-block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
            <button className="btn btn-main px-4">Hire Us</button>
          </div>
          <div className="col-md-7">
            <img src={heroSvg} alt="hero img right" width="80%" className="pl-auto"/>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
