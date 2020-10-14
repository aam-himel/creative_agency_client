import React from 'react';

const AdminServiceList = () => {
    return (
        <div style={{width:'95%', margin:'0 auto', backgroundColor:'white', borderRadius:'10px'}}>
            <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">Names</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">Service</th>
                    <th scope="col">Project Details</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Sufi Ahmed Hamim</td>
                    <td>sufi@gmail.com</td>
                    <td>@Graphic Design</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                    <td>Pending</td>
                </tr>
                <tr>
                    <td>Sufi Ahmed Hamim</td>
                    <td>sufi@gmail.com</td>
                    <td>@Graphic Design</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                    <td>Pending</td>
                </tr>
                <tr>
                    <td>Sufi Ahmed Hamim</td>
                    <td>sufi@gmail.com</td>
                    <td>@Graphic Design</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                    <td>Pending</td>
                </tr>
               
            
            </tbody>
            </table>
        </div>
    )
}

export default AdminServiceList;