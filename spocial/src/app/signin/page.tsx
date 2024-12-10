"use client"

import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import {
    connectAuthEmulator,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { firebaseConfig } from './config';
import React, {useEffect} from "react";
import Link from "next/link";
import Register from "../register/page";


const SignInWithEmailAndPassword = () => {

    useEffect(()=> {
        const app = initializeApp(firebaseConfig);



        const auth = getAuth();
        const database = getDatabase(app);

        /* if (window.location.hostname === 'localhost') {
            connectAuthEmulator(auth, 'http://127.0.0.1:9099');
        } */

        const emailInput = document.getElementById('email')! as HTMLInputElement;
        const passwordInput = document.getElementById('password')! as HTMLInputElement;
        const signInButton = document.getElementById(
            'quickstart-sign-in',
        )! as HTMLButtonElement;
        const signUpButton = document.getElementById(
            'quickstart-sign-up',
        )! as HTMLButtonElement;
        const passwordResetButton = document.getElementById(
            'quickstart-password-reset',
        )! as HTMLButtonElement;
        const signInStatus = document.getElementById(
            'quickstart-sign-in-status',
        )! as HTMLSpanElement;
        const accountDetails = document.getElementById(
            'quickstart-account-details',
        )! as HTMLDivElement;

        /**
         * Handles the sign in button press.
         */
        function toggleSignIn() {
            if (auth.currentUser) {
                signOut(auth);
            } else {
                const email = emailInput.value;
                const password = passwordInput.value;
                if (email.length < 4) {
                    alert('Please enter an email address.');
                    return;
                }
                if (password.length < 4) {
                    alert('Please enter a password.');
                    return;
                }
                // Sign in with email and pass.
                signInWithEmailAndPassword(auth, email, password).catch(function (error) {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                    signInButton.disabled = false;
                });
            }
            signInButton.disabled = true;
        }

        /**
         * Handles the sign up button press.
         */
        function sendPasswordReset() {
            const email = emailInput.value;
            sendPasswordResetEmail(auth, email)
                .then(function () {
                    // Password Reset Email Sent!
                    alert('Password Reset Email Sent!');
                })
                .catch(function (error) {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorCode == 'auth/invalid-email') {
                        alert(errorMessage);
                    } else if (errorCode == 'auth/user-not-found') {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
        }

// Listening for auth state changes.
        onAuthStateChanged(auth, function (user) {
            //verifyEmailButton.disabled = true;
            if (user) {
                // User is signed in.
                const displayName = user.displayName;
                const email = user.email;
                const emailVerified = user.emailVerified;
                const photoURL = user.photoURL;
                const isAnonymous = user.isAnonymous;
                const uid = user.uid;
                const providerData = user.providerData;
                signInStatus.textContent = 'Signed in';
                signInButton.textContent = 'Sign out';
                accountDetails.textContent = JSON.stringify(user, null, '  ');
                if (!emailVerified) {
                    //verifyEmailButton.disabled = false;
                }
            } else {
                // User is signed out.
                signInStatus.textContent = 'Signed out';
                signInButton.textContent = 'Sign in';
                accountDetails.textContent = 'null';
            }
            signInButton.disabled = false;
        });

        signInButton.addEventListener('click', toggleSignIn, false);
        passwordResetButton.addEventListener('click', sendPasswordReset, false);
        signUpButton.addEventListener('click', Register, false);

    }, []);
    return (
        //change for page
        <div>
            <span className="inria-serif-regular">
                <h1>Spocial</h1>
                <h2>Sign In</h2>
            </span>

            <div>
                <input
                    id="email"
                    type="text"
                    placeholder="Email"/>
                <input
                    id="password"
                    type="text"
                    placeholder="Password"/>
            </div>
            <div>
                <button
                    id="quickstart-sign-in"
                    value="Sign In">
                </button>
                <a href="/">
                    <button
                        id="quickstart-password-reset"
                        value="Forgot Password?"
                    >Forgot Password?</button>
                </a>

                <a href="/register">
                    <button
                        id="quickstart-sign-up"
                        value="Register Now">
                        Register Now
                        </button>
                </a>
            </div>

            <ul style={{listStyle: 'none'}}>
                <li>
                    {/* Endpoint to route to Post component */}
                    <span className="inria-serif-regular">
                        <Link href="/">Home</Link>
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default SignInWithEmailAndPassword;
