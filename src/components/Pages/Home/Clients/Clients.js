import React from "react";
import './Clients.css';
import airbnb from '../../../../images/logos/airbnb.png';
import google from '../../../../images/logos/google.png';
import netflix from '../../../../images/logos/netflix.png';
import slack from '../../../../images/logos/slack.png';
import uber from '../../../../images/logos/uber.png';

const Clients = () => {
  return (
   <div className="container my-5"> 
    <div className="row clients d-flex align-items-center justify-content-center">
      <div className="   col-md-2  px-1">
        <img src={slack} alt="" width="140" height="36"/>
      </div>
      <div className="   col-md-2  px-1">
        <img src={google} alt="" width="129" height="44"/>
      </div>
      {/* <div className="col-md-2">
        <img src={netflix} alt=""/> */}
      <div className="   col-md-2 px-1">
        <img src={netflix} alt="" width="120" height="67"/>
      </div>
      <div className="   col-md-2  px-1">
        <img src={uber} alt="" width="99" height="56"/>
      </div>
      <div className="   col-md-2  px-1">
        <img src={airbnb} alt="" width="161" height="51"/>
      </div>
    </div>
   </div>
  );
};

export default Clients;
