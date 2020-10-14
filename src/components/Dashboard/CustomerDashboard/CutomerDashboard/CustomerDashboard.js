import React, { useState } from "react";
import logo from "../../../../images/logos/logo.png";
import userImg from "../../../../images/customer-2.png";
import "./CustomerDashboard.css";
import CustomerOrder from "../CutomerOrder/CustomerOrder";
import CustomerReview from "../CurtomerReview/CustomerReview";
import CustomerServiceList from "../CustomerServiceList/CustomerServiceList";

const fakeServiceList = [
    {
        img: userImg,
        title: 'Web & Mobile design',
        body: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    },
    {
        img: userImg,
        title: 'Graphic design',
        body: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        img: userImg,
        title: 'Web & Mobile design',
        body: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    }

]

const CustomerDashboard = () => {
  const [option, setOption] = useState("order");
  return (
    <div className="" id="cutomer-dashboard">
      <div className="row ">
        <div className="col-md-3 left px-5 py-3">
          <img src={logo} alt="logo" height="30px" />
          <div className="sidebar-links">
            <p onClick={() => setOption("order")}>Order</p>
            <p onClick={() => setOption("service")}>Service List</p>
            <p onClick={() => setOption("review")}>Review</p>
          </div>
        </div>

        <div className="col-md-9 right-side py-3">
          <nav className="nav">
            <ul className="custom-nav-item">
              <li className="pr-4">
                  <h5> {option.toUpperCase()} </h5>
              </li>
              <li className="pr-4">
                <p>Himel</p>
              </li>
            </ul>
          </nav>


        {/* This immidiate invoke function - Interesting */}
          {(()=> {
          if (option === "order") {
            return <CustomerOrder />;
          } else if(option === "service"){
            return <CustomerServiceList data={fakeServiceList}/>
          }else if(option === "review"){
              return <CustomerReview />
          }
        })()}

        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
