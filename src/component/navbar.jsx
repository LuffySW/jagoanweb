import { Link } from "react-router-dom";
import "./assets/style.css";



export default function Navbar() {
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

  return (
    <header className="header sticky-top">
        <div className="container">
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
                        <Link to={"/login"} id="btn-login" className="btn btn-danger">Login</Link>
                        <img src={require("./assets/Cart.png")} alt="" />
                    </div>
                </div>
            </nav>
        </div>
    </header>
  );
}