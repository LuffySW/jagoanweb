import Navbar from "../component/navbar";
import { Link } from "react-router-dom";
import Footer from "../component/footer";

export default function Login() {
    return (
        <>
            <Navbar />
            <div className="login-container">
                <div className="container-sm" id="login-box">
                    <div className="login-card">
                        <div className="login-card-flex">
                            <div className="login-card-form">
                                <div className="login-card-form-title">
                                    <h1 className="font-weight-bold">Welcome Back!</h1>
                                    <p>Please login to continue</p>
                                </div>
                                <form>
                                    <div class="form-group mb-3">
                                        <label for="exampleInputEmail1" className="mb-2">Email</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="exampleInputPassword1" className="mb-2">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <Link to="/main" className="link-button text-primary">Forgot Password?</Link>
                                    <button type="submit" id="login-button" class="btn btn-primary mt-3 mb-2">Login</button>
                                    <div className='register'>
                                        <span>Need Account?</span>
                                        <Link to="/main" className="link-button text-primary">Register</Link>
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