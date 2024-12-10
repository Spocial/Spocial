"use client"

import {
    createUserWithEmailAndPassword,
    getAuth, sendEmailVerification,
    sendPasswordResetEmail
} from "firebase/auth";
import React, { useEffect } from "react";
import Link from 'next/link'
import { firebaseConfig } from "../signin/config";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { withRouter } from "next/router";

const Register = () => {
    useEffect(() => {
        initializeApp(firebaseConfig);
        const auth = getAuth();

        const emailInput = document.getElementById('email')! as HTMLInputElement;
        const passwordInput = document.getElementById('password')! as HTMLInputElement;

        const verifyEmailButton = document.getElementById(
            'quickstart-verify-email',
        )! as HTMLButtonElement;

        const signUpButton = document.getElementById(
            'quickstart-sign-up',
        )! as HTMLButtonElement;

        function handleSignUp() {
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
            // Create user with email and pass.
            createUserWithEmailAndPassword(auth, email, password).then(() => {
                // @ts-ignore
                this.props.history.push('/path')
            }).catch(function (error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
        }

        /**
         * Sends an email verification to the user.
         */
        function sendVerificationEmailToUser() {
            sendEmailVerification(auth.currentUser!).then(function () {
                // Email Verification sent!
                alert('Email Verification Sent!');
            });
        }

        signUpButton.addEventListener('click', handleSignUp, false);
        //verifyEmailButton.addEventListener('click', sendVerificationEmailToUser, false);

    }, []);

    return (
        //change for page
        <div>
            <span className="inria-serif-regular">
                <h2>Register</h2>
            </span>

            <div>
                <input
                    id="email"
                    type="text"
                    placeholder="Email" />
                <input
                    id="password"
                    type="text"
                    placeholder="Password" />
                <button
                    id="quickstart-sign-up"
                    value="Sign Up">Sign Up
                </button>
            </div>

            <span className="inria-serif-regular">
                <h1><Link href="/">Spocial</Link></h1>
                <div className="divider"></div>
            </span>
            {/* <br /> */}
            <ul style={{ listStyle: 'none' }}>
                <li>
                    {/* Endpoint to route to Post component */}
                    <span className="inria-serif-regular">
                        <Link href="/"><h4>Home</h4></Link>
                    </span>
                </li>
                <li>
                    {/* Endpoint to route to Post component */}
                    <span className="inria-serif-regular">
                        <Link href="/post"><h5>Post</h5></Link>
                    </span>
                </li>
                <li>
                    <span className="inria-serif-regular">
                        <Link href="/recipebook"><h6>Recipe Book</h6></Link>
                    </span>
                </li>
                <li>
                    {/* Endpoint to route to Post component */}
                    <span className="inria-serif-regular">
                        <Link href="/signin">Sign In</Link>
                    </span>
                </li>
            </ul>
            <div className="vl"></div>
        </div>
    );
}
export default Register;