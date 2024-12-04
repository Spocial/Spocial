import {createUserWithEmailAndPassword,
    getAuth, sendEmailVerification,
    sendPasswordResetEmail} from "firebase/auth";
import React, {useEffect} from "react";
import Link from 'next/link'
import {firebaseConfig} from "@/src/app/signin/config";
import {initializeApp} from "firebase/app";

const Register = () =>{
    useEffect(()=>{
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
            createUserWithEmailAndPassword(auth, email, password).catch(function (error) {
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
        verifyEmailButton.addEventListener('click', sendVerificationEmailToUser, false);

    }, []);

    return(
        //change for page
        <div>
            <span className="inria-serif-regular">
                <h1>Spocial</h1>
                <h2>Register</h2>
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
                <button
                    id="quickstart-sign-in"
                    value ="Sign Up">
                </button>
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

}
export default Register;