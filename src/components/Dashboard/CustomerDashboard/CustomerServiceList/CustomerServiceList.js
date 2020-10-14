import React from "react";
import CustomerServiceCard from "../CustomerServiceCard/CustomerServiceCard";

const CustomerServiceList = (props) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 mt-4">
    
      {
          props.data.map(data => <CustomerServiceCard data = {data} />)
      }
      
    </div>
  );
};

export default CustomerServiceList;
