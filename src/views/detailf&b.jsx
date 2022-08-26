import { Button } from "react-bootstrap"
import Navbar from "../component/navbar"
import FBSwiper from "../component/f&bswiper"


export default function FBdetails() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="d-flex justify-content-center p-5" id="flex-details">
                    <div className="fb-details-img">
                        <div className="fb-bg">
                            <img src="https://th.bing.com/th/id/OIP.GUmTVPS2bDU2gZP3_3IPYwHaE7?pid=ImgDet&rs=1" alt=""></img>
                        </div>
                    </div>
                    <div className="fb-details-text p-4">
                        <h1 className="font-weight-bold">Nasi Goreng</h1>
                        <h5 className="font-weight-bold mt-3">Rp. 10.000</h5>
                        <div className="d-flex flex-column align-items-end" id="purcahse-button-container">
                            <div className="purchase-product p-2">
                                <div className="d-flex" id="button-purchase">
                                    <button>Add to Cart</button>
                                    <button>Buy Now!</button>
                                </div>
                            </div>
                        </div>
                        <div className="description">
                            <p className="text-justify mt-4">Bakso sapi adalah makanan yang berasal dari China selatan dan masyarakat perantauan Tionghoa. Dapat dilihat dari istilah ‘Bakso’ berasal dari kata Bak dan So, yaitu dalam bahasa Hokkien yang secara harfiah berarti daging giling. Tapi yang membedakan dengan bakso Tionghoa ini adalah dagingnnya, karena mayoritas penduduk Indonesia adalah muslim, maka daging digunakan adalah daging halal.</p>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <h1 className="font-weight-bold ml-4">Ayo Pesan Makanan Lainnya!</h1>
                    <FBSwiper />
                </div>
                <div className="p-5">
                    <h1 className="font-weight-bold ml-4">Rekomendasi Minuman Untukmu!</h1>
                    <FBSwiper />
                </div>
            </div>
        </>

    )
}