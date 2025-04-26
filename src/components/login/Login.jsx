import React, {useState} from 'react';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from "../../fire/firebase_init.js";
import {getAuth, signOut} from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const Login = () => {
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {
        console.log('handleGoogleSignIn');

        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
                setUser(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('signOut');
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result);
                setUser(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2>Please Log in here </h2>


            {
                user ? <button onClick={handleSignOut}>Sign Out</button> :
                    <>
                        <button onClick={handleGoogleSignIn}>Sign in with google</button>

                        <button onClick={handleGithubSignIn}>Sign in wth github</button>

                    </>


            }
            {
                user && <div>
                    <h3>{user.displayName}</h3>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt=""/>
                </div>
            }
        </div>
    );
};

export default Login;
