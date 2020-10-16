import React from "react";
import CustomerServiceCard from "../CustomerServiceCard/CustomerServiceCard";

const CustomerServiceList = ({userOrders}) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 mt-4">
    
      {
          userOrders.map(userOrder => <CustomerServiceCard userOrder = {userOrder} />)
      }
      
    </div>
  );
};

export default CustomerServiceList;
