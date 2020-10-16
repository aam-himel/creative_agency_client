import React from 'react';
import img from '../../../../images/customer-1.png';
import './ServiceCard.css';
const ServiceCard = (props) => {
    console.log(props);
    const service = props.service;
    return (
        <div class="col mb-4 service">
            <div class="card d-flex align-items-center text-center py-4">
                <img src={img} class="card-img-top avatar " alt="..." />
                <div class="card-body">
                    <h5 class={"card-title"}>{service.title} </h5>
                    <p class="card-text"> {service.description} </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;
