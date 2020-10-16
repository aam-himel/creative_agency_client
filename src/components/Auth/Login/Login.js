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


    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/dashboard" } };
    

    const handleGoogleSignIn = (e) =>{
        e.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
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
            console.log(signedInUser.email);
            fetch('https://powerful-reef-83308.herokuapp.com/isAdmin', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify({email: signedInUser.email })
            })
            .then(res => res.json())
            .then(data => {
              if(data) {
                console.log(data);
                sessionStorage.setItem('isAdmin', true);
                
              }
            });

            setLoggedInUser(signedInUser);
            sessionStorage.setItem('email', signedInUser.email);
            sessionStorage.setItem('displayName', signedInUser.name);
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