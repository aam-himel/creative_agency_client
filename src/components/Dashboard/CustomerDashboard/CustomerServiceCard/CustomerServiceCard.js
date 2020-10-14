import React from 'react';

const CustomerServiceCard = (props) => {
    const fakeData = props.data;
    console.log(fakeData);
    return (
        <div className="col-md-5 mb-4">
        <div className="card">
            <div className="d-flex justify-content-between px-2 py-2">
                <img src={fakeData.img} alt="" className="avatar"/>
                <button className="btn btn-success font-weight-light px-2 py-0">pending</button>
            </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text asfdasfdsf adf dfasf below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    )
}

export default CustomerServiceCard;
