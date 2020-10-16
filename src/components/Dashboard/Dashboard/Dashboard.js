import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../../App'
import AdminDashboard from '../AdminDashboard/AdminDashboard/AdminDashboard';
import CustomerDashboard from '../CustomerDashboard/CutomerDashboard/CustomerDashboard';

const Dashboard = () => {
    const [loggedInUser] = useContext(UserContext);
    // const [isAdmin, setIsAdmin] = useContext(UserContext);
    const email = sessionStorage.email;
    const isAdmin = sessionStorage.getItem('isAdmin');
    console.log(loggedInUser.email);

    return (
       <>
       {
           (email && isAdmin ) ? <AdminDashboard />
           : <CustomerDashboard />
       }
       </>
    )
}

export default Dashboard
