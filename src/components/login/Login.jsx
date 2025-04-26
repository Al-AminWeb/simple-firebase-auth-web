import React from 'react';
import  {GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import {auth} from "../../fire/firebase_init.js";

const Login = () => {

    const provider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        console.log('handleGoogleSignIn');

        signInWithPopup(auth,provider)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <h2>Please Log in here </h2>
            <button onClick={handleGoogleSignIn}>Sign in with google</button>
        </div>
    );
};

export default Login;
