import React, { useEffect, useState } from "react";
import logo from "../../../../images/logos/logo.png";
import "./CustomerDashboard.css";
import CustomerOrder from "../CutomerOrder/CustomerOrder";
import CustomerReview from "../CurtomerReview/CustomerReview";
import CustomerServiceList from "../CustomerServiceList/CustomerServiceList";



const CustomerDashboard = () => {
  const [option, setOption] = useState("order");
  const [userOrders, setUserOrders] = useState([]);
  const currentUser = sessionStorage.getItem('email');
  const user = sessionStorage.getItem('displayName');
  console.log(currentUser);
  useEffect(() => {
    fetch('https://powerful-reef-83308.herokuapp.com/userOrders', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({email: currentUser})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setUserOrders(data);

    })
    .catch(error => {
      console.error(error)
    })
  }, [])

  
  const handleCustomerServicesubmit = (e) => {
    e.preventDefault();
    console.log('Dashboard form submited');
  }
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
              <p> {user} </p>
              </li>
            </ul>
          </nav>


        {/* This immidiate invoke function - Interesting */}
          {(()=> {
          if (option === "order") {
            return <CustomerOrder handleSubmit={() => handleCustomerServicesubmit}/>;
          } else if(option === "service"){
            return <CustomerServiceList userOrders={userOrders}/>
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
