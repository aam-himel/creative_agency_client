import React from 'react';
import img from '../../../../images/customer-1.png';
import './ServiceCard.css';
const ServiceCard = () => {
    return (
        <div class="col mb-4 service">
            <div class="card d-flex align-items-center text-center py-4">
                <img src={img} class="card-img-top avatar " alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;
