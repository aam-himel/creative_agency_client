import React, { useContext, useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import logo from '../../../images/logos/logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./Firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from 'react-router-dom';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    useEffect(() => {
      fetch('http://localhost:5000/isAdmin', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify({email: loggedInUser.email})
            })
            .then(res => res.json())
            .then(data => {
              if(data) {
                setIsAdmin(true);
              }
            });
            
    }, [loggedInUser])

    const handleGoogleSignIn = (e) =>{
        
        const provider = new firebase.auth.GoogleAuthProvider();
        console.log("Logged in user isAdmin",isAdmin);
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((res) => {
            const {displayName, email, photoURL} = res.user;
            const signedInUser = {
                name: displayName,
                email: email,
                photo: photoURL,
            }
        

            setLoggedInUser(signedInUser);
            sessionStorage.setItem('email', signedInUser.email);
            getCurrentUser();
          })
          .catch((err) => {
            console.log(err);
            let errorMsg = err.message;
            console.log("Error", errorMsg);
          });
    }


    const getCurrentUser = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then( idToken =>  {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(error => {
            // Handle error
          });
    }
    return (
        <div className="container text-center">
            <img src={logo} alt="logo" height="40px"/>
            <LoginForm handleGoogleSignIn={handleGoogleSignIn}/>
        </div>
    )
}

export default Login;