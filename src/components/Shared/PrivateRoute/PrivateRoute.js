import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';


const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, ] = useContext(UserContext);
    console.log(loggedInUser);
    console.log(sessionStorage.getItem('token'));
    
    const isLoggedIn = () => {
      console.log('isloggedin called');
      const token = sessionStorage.getItem('token');
      if(!token){
        return false;
      }else {
        return true;
      }
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          (isLoggedIn() || loggedInUser.email) ? (
            children
          ) : (
            
            <Redirect
              to={
                
                {
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    )
}

export default PrivateRoute;
