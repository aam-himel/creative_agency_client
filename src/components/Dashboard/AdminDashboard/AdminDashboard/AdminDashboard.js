import React, { useState } from 'react';
import logo from "../../../../images/logos/logo.png";
import userImg from "../../../../images/customer-2.png";
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
const AdminDashboard = () => {
    const [option, setOption] = useState("service");
    return (
      <div className="" id="cutomer-dashboard">
        <div className="row ">
          <div className="col-md-3 left px-5 py-3">
            <img src={logo} alt="logo" height="30px" />
            <div className="sidebar-links">
              <p onClick={() => setOption("service")}>Order</p>
              <p onClick={() => setOption("addService")}>Service List</p>
              <p onClick={() => setOption("makeAdmin")}>Review</p>
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
            if (option === "service") {
              return <AdminServiceList />;
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
