import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const fakeServices = [
    {
        img: 'f',

    }
]
const Services = () => {
  return (
    <div className="container my-5">
    <h3 className="py-5 text-center">Provide awesome <span className="span-color">services</span></h3>
      <div className="row row-cols-1 row-cols-md-3 ">
        {/* <div className="col-md-4">
          
        </div> */}
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
