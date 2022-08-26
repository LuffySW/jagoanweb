import Navbar from "../component/navbar";
import "./assets/style.css"
import MainSlider from "../component/mainSlider";
import FBSwiper from "../component/f&bswiper";
import Footer from "../component/footer";
export default function Home() {

  return (
    <>
      <Navbar />
      <MainSlider />
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="Food-category mt-5">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex">
                <h2 className="fw-bold" style={{fontWeight:"bold"}}>Pilih Makanan Yang</h2>
                <h2 className="text-danger" style={{fontWeight:"bold",paddingLeft:"0.5rem"}}>Kamu Suka</h2>
              </div>
              <div className="d-flex justify-content-between align-items-center" id="flex-food">
                <div className="food-category-icon">
                  <img src="https://th.bing.com/th/id/OIP.GUmTVPS2bDU2gZP3_3IPYwHaE7?pid=ImgDet&rs=1" alt="" />
                  <div className="d-flex justify-content-center align-items-center">
                    <h3>Nasi Goreng</h3>
                  </div>
                </div>
                <div className="food-category-icon">
                  <img src="https://th.bing.com/th/id/OIP.GUmTVPS2bDU2gZP3_3IPYwHaE7?pid=ImgDet&rs=1" alt="" />
                  <div className="d-flex justify-content-center align-items-center">
                    <h3>Nasi Goreng</h3>
                  </div>
                </div>
                <div className="food-category-icon">
                  <img src="https://th.bing.com/th/id/OIP.GUmTVPS2bDU2gZP3_3IPYwHaE7?pid=ImgDet&rs=1" alt="" />
                  <div className="d-flex justify-content-center align-items-center">
                    <h3>Nasi Goreng</h3>
                  </div>
                </div>
                <div className="food-category-icon">
                  <img src="https://th.bing.com/th/id/OIP.GUmTVPS2bDU2gZP3_3IPYwHaE7?pid=ImgDet&rs=1" alt="" />
                  <div className="d-flex justify-content-center align-items-center">
                    <h3>Nasi Goreng</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="beverage-category mt-5">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex">
                <h2 className="fw-bold" style={{fontWeight:"bold"}}>Atau Pesan</h2>
                <h2 className="text-danger" style={{fontWeight:"bold",paddingLeft:"0.5rem"}}>Minuman Favoritmu</h2>
              </div>
              <div className="d-flex justify-content-between align-items-center" id="flex-food">
                <div className="food-category-icon">
                  <img src="https://th.bing.com/th/id/OIP.GUmTVPS2bDU2gZP3_3IPYwHaE7?pid=ImgDet&rs=1" alt="" />
                  <div className="d-flex justify-content-center align-items-center">
                    <h4>Nasi Goreng</h4>
                  </div>
                </div>
                <div className="food-category-icon">
                  <img src="https://th.bing.com/th/id/OIP.GUmTVPS2bDU2gZP3_3IPYwHaE7?pid=ImgDet&rs=1" alt="" />
                  <div className="d-flex justify-content-center align-items-center">
                    <h4>Nasi Goreng</h4>
                  </div>
                </div>
                <div className="food-category-icon">
                  <img src="https://th.bing.com/th/id/OIP.GUmTVPS2bDU2gZP3_3IPYwHaE7?pid=ImgDet&rs=1" alt="" />
                  <div className="d-flex justify-content-center align-items-center">
                    <h4>Nasi Goreng</h4>
                  </div>
                </div>
                <div className="food-category-icon">
                  <img src="https://th.bing.com/th/id/OIP.GUmTVPS2bDU2gZP3_3IPYwHaE7?pid=ImgDet&rs=1" alt="" />
                  <div className="d-flex justify-content-center align-items-center">
                    <h4>Nasi Goreng</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="delivery-section">
          <div className="d-flex justify-content-between align-items-center">
            <div className="delivery-icon">
              <img src={require("./assets/delivery.png")} alt="" />
            </div>
            <div className="delivery-text p-5">
               <img src={require("./assets/Makan Enak Nggak Perlu Keluar Rumah.png")} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-5 mb-5">
          <FBSwiper />
          </div>
        <div className="delivery-section">
          <div className="d-flex justify-content-between align-items-center">
            <div className="delivery-icon">
              <img src={require("./assets/cuate.png")} alt="" />
            </div>
            <div className="delivery-text p-5">
              <img src={require("./assets/Nikmati lebih banyak waktu luangmu dengan makan enak tanpa ngantri.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}