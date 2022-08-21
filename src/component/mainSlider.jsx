import {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import "swiper/css/free-mode"
import SwiperCore, { Autoplay } from 'swiper';
export default function MainSlider() {
    SwiperCore.use([Autoplay]);
    return (
        <>
          <div className="container py-4 px-4 justfy-content-center p-3" >
            <Swiper spaceBetween={10} slidesPerView={1} freeMode={true} loop={true} autoplay={{ delay: 3000,disableOnInteraction: false}}>
              <SwiperSlide>
              <div className="d-flex justify-content-center">
                  <div className="slider-container">
                    <div className="slider-content">
                      <div className="d-flex justify-content-center ">
                        <div className="slider-text">
                          <img src={require("./assets/Makan Kapanpun dan Dimanapun Kamu Mau.png")} alt="" />
                          <button  id="btn-menu" className="btn btn-danger">Lihat Menu</button>
                        </div>
                        <div className="slider-icon">
                          <img src={require("./assets/cuate.png")} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="d-flex justify-content-center">
                  <div className="slider-container">
                    <div className="slider-content">
                      <div className="d-flex justify-content-center ">
                        <div className="slider-text-2">
                          <img src={require("./assets/Pesan Apapun yang Kamu Suka Tanpa Ribet.png")} alt="" />
                          <button  id="btn-menu" className="btn btn-danger">Pesan Sekarang</button>
                        </div>
                        <div className="slider-icon-2">
                          <img src={require("./assets/eat.png")} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
      </>
    );
}