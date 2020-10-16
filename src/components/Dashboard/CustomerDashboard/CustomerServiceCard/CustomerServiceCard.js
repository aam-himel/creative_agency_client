import React from 'react';

const CustomerServiceCard = ({userOrder}) => {

    return (
        <div className="col-md-5 mb-4">
        <div className="card">
            <div className="d-flex justify-content-between px-2 py-2">
                <img src={`data:image/png;base64,${userOrder.image.img}`} alt="Customer orders" className="avatar"/>
                <button className="btn btn-success font-weight-light px-2 py-0"> {userOrder.status} </button>
            </div>
          <div className="card-body">
            <h5 className="card-title"> {userOrder.serviceName} </h5>
            <p className="card-text"> {userOrder.description} </p>
          </div>
        </div>
      </div>
    )
}

export default CustomerServiceCard;
