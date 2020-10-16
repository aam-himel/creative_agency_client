import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://powerful-reef-83308.herokuapp.com/services')
    .then(res => res.json())
    .then(data => {
      setServices(data);
    })
  }, [])
  return (
    <div className="container my-5">
    <h3 className="py-5 text-center">Provide awesome <span className="span-color">services</span></h3>
      <div className="row row-cols-1 row-cols-md-3 ">

        {
          services.map(service => <ServiceCard service={service} key={service._id}/> )
        }
        {/* <ServiceCard /> */}
      </div>
    </div>
  );
};

export default Services;
