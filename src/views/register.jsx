import Navbar from "../component/navbar";
import { Link } from "react-router-dom";
import Footer from "../component/footer";
import React,{useCallback, useState} from "react";
import {useNavigate} from "react-router-dom"
import app from "../base";
import { GoogleAuth } from "../base";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Register = ({history}) => {
    const navigate = useNavigate()
    const [sentemail,setSentEmail] =  useState("")

    const signInWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(GoogleAuth,provider).then((re)=>{
            console.log(re)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email,password} = event.target.elements;
        try{
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value,password.value).then((userCredential)=>{
                    // send verification mail.
                  userCredential.user.sendEmailVerification();
                  setSentEmail("Email Terkirim")
                  app.auth().signOut()
                  navigate("/login")
                  
                })
        }
        catch (error){
            console.log(error)
        }
    },[history])
    

    return (
        <>
            <Navbar />
            <div className="login-container">
                <div className="container-sm" id="login-box">
                    <div className="login-card">
                        <div className="login-card-flex">
                            <div className="login-card-form">
                                <div className="login-card-form-title">
                                    <h1 className="font-weight-bold">Hello guys!</h1>
                                    <p>Please SignUp </p>
                                    {sentemail}
                                </div>
                                <div className="d-flex  justify-content-center align-items-center" id="google-button" onClick={signInWithGoogle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                    </svg>
                                </div>
                                <form onSubmit={handleSignUp}>
                                    <div class="form-group mb-3">
                                        <label for="exampleInputEmail1" className="mb-2">Email</label>
                                        <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="exampleInputPassword1" className="mb-2">Password</label>
                                        <input name="password" type="password" class="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <Link to="/main" className="link-button text-primary">Forgot Password?</Link>
                                    <button type="submit" id="login-button" class="btn btn-primary mt-3 mb-2">Register</button>
                                    <div className='register'>
                                        <span>Already have Account?</span>
                                        <Link to="/login" className="link-button text-primary">Login</Link>
                                    </div>
                                </form>
                            </div>
                            <div className="login-card-icon">
                                <div className="login-card-img-icon">
                                    <img src={require("./assets/login.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            
        </>
    );
}

export default Register;