import React from 'react';
import img1 from '../../../../images/customer-1.png'; 
const FeedbackCard = () => {
    return (
        <>
        <div class="col-sm-6 col-md-4 mb-3">
            <div class="card">
            <div class="card-body">
                <div className="d-flex align-items-start">
                    <img src={img1} alt="" className="avatar"/>
                    <div className="pl-4">
                        <h6>Nash Patrik</h6>
                        <p>CEO, Manpol</p>
                    </div>
                </div>
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, atque.</p>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default FeedbackCard;