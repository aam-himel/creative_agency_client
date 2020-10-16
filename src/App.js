import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Auth/Login/Login';
import PrivateRoute from './components/Shared/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

export const UserContext = createContext();


const App = () => {
  
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard />
            
          </PrivateRoute>

        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
