import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login';
import CustomerDashboard from './components/Dashboard/CustomerDashboard/CutomerDashboard/CustomerDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard/AdminDashboard/AdminDashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/dashboard/user">
            <CustomerDashboard/>
          </Route>

          <Route path="/dashboard/admin">
            <AdminDashboard/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
