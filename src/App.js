import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Auth/Login/Login';
import CustomerDashboard from './components/Dashboard/CustomerDashboard/CutomerDashboard/CustomerDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard/AdminDashboard/AdminDashboard';
import PrivateRoute from './components/Shared/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


const App = () => {
  
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser,setLoggedInUser,isAdmin,setIsAdmin]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <PrivateRoute path="/dashboard/user">
            <CustomerDashboard/>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/admin">
            <AdminDashboard/>
          </PrivateRoute>

        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
