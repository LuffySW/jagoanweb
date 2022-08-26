import { Link } from "react-router-dom";
import "./assets/style.css";
import React,{useContext} from "react"
import { AuthContext } from "../Auth";
import app from "../base";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';



export default function Navbar() {
    const {currentUser} = useContext(AuthContext)

    console.log(currentUser)

    window.onscroll = function() {scrollFunction()};
 
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.background = "white";
        document.getElementById("navbar").style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.25)";
      } else {
       
        document.getElementById("navbar").style.background = "none";
        document.getElementById("navbar").style.boxShadow = "none";
      }
    }

    const SignOut = () => {
        confirmAlert({
            title: 'Keluar',
            message: 'Anda yakin ingin keluar?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () =>{ app.auth().signOut() }
                },
                {
                    label: 'No'
                }
            ]});
    }

    
  return (
    <header className="header sticky-top">
        <div className="container-m">
            <nav className="sticky" id="navbar">
                <div className="d-flex justify-content-between align-items-center" id="navbar-layout">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src={require("./assets/Logo.png")} />
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item" to="/">
                                Home
                            </Link>
                            <a className="navbar-item" href="https://bulma.io/documentation/">
                                Food
                            </a>
                            <a className="navbar-item" href="https://bulma.io/documentation/">
                                Beverage
                            </a>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="d-flex align-items-center">
                            {currentUser ? <button onClick={() => SignOut()} id="btn-login" className="btn btn-danger">Keluar</button>
                                :<Link to={"/login"} id="btn-login" className="btn btn-danger">Masuk</Link>
                            }
                            <Link to='/cart'><img src={require("./assets/Cart.png")} alt="" /></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  );
}