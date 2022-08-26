import Navbar from "../component/navbar";
import CartFooter from "../component/cartFooter";

export default function Cart(){
    return(
        <>
        <div className="d-flex flex-column justify-content-between " id="cart-footer-main-layout">
            <div className="cart-main">
                <Navbar/>
                <div className="container p-5" id="cart-main">
                    <div className="product-container">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="product-cart-img">
                                <img src="https://www.foodforfitness.co.uk/wp-content/uploads/2018/05/IMG_7741-2000x1333.jpg" alt="" />
                            </div>
                            <div className="product-cart-desc">
                                <h3>Nasi Goreng</h3>
                                <p className="font-weight-bold">Rp 20.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end align-items-end">
                <CartFooter/>
            </div>
        </div>
        </>

    )
}