import React, { useEffect, useState } from 'react';
import logo from "../../../../images/logos/logo.png";
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';



const AdminDashboard = () => {
    const [option, setOption] = useState("service");
    const [orders, setOrders] = useState([]);
    const user = sessionStorage.getItem('displayName');
    useEffect(() => {
      fetch('https://powerful-reef-83308.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setOrders(data));
    }, [])
    
    
    return (
      <div className="" id="cutomer-dashboard">
        <div className="row ">
          <div className="col-md-3 left px-5 py-3">
            <img src={logo} alt="logo" height="30px" />
            <div className="sidebar-links">
              <p onClick={() => setOption("service")}>Service List</p>
              <p onClick={() => setOption("addService")}>Add Service</p>
              <p onClick={() => setOption("makeAdmin")}>Make Admin</p>
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
            if (option === "service") {
              return <AdminServiceList orders={orders}/>;
            } else if(option === "addService"){
              return <AddService/>;
            }else if(option === "makeAdmin"){
                return <MakeAdmin />
            }
          })()}
  
          </div>
        </div>
      </div>
    );
}

export default AdminDashboard;
