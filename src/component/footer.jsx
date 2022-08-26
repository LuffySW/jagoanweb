


export default function Footer() {
    return (
        <div className="footer w-100 h-100 p-5">
            <div className="d-flex justify-content-center align-items-center">
                <div className="footer-logo">
                    <img src={require("./assets/logo2.png")} alt="" />
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center p-3">
                <div className="footer-logo p-3">
                    <img src={require("./assets/email.png")} alt="" />
                </div>
                <div className="footer-logo p-3">
                    <img src={require("./assets/tiktok.png")} alt="" />
                </div>
                <div className="footer-logo p-3">
                    <img src={require("./assets/youtube.png")} alt="" />
                </div>
                <div className="footer-logo p-3">
                    <img src={require("./assets/twiter.png")} alt="" />
                </div>
                <div className="footer-logo p-3">
                    <img src={require("./assets/instagram.png")} alt="" />
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="footer-text p-3">
                    <p>Copyright © 2020 All rights reserved</p>
                </div>
            </div>
        </div>
    );
}