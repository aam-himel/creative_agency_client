import React from 'react';

const AdminServiceList = (props) => {
    const orders = props.orders
    return (
        <div style={{width:'95%', margin:'0 auto', backgroundColor:'white', borderRadius:'10px'}}>
            <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">Names</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">Service</th>
                    <th scope="col">Project Details</th>
                    <th scope="col">Status </th>
                </tr>
            </thead>

            <tbody>
                {
                    orders.map(order => <tr>
                        <td> {order.name} </td>
                        <td> {order.email} </td>
                        <td> {order.serviceName} </td>
                        <td> {order.description}</td>
                        <td>{order.status}</td>
                     </tr>
                   
                    )}    
            </tbody>
            </table>
        </div>
    )
}

export default AdminServiceList;