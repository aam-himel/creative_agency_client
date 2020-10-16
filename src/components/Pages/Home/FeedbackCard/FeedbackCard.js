import React from 'react';
import img1 from '../../../../images/customer-1.png'; 
const FeedbackCard = ({feedback}) => {
    return (
        <>
        <div class="col-sm-6 col-md-4 mb-3">
            <div class="card">
            <div class="card-body">
                <div className="d-flex align-items-start">
                    <img src={img1} alt="" className="avatar"/>
                    <div className="pl-4">
                        <h6>{feedback.user} </h6>
                        <p>CEO, Manpol</p>
                    </div>
                </div>
                <div>
                    <p>{feedback.feedback} </p>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default FeedbackCard;