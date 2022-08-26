import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import "swiper/css/free-mode"
import { Card,Button } from 'react-bootstrap';

export default function FBSwiper() {
    return (
        <div className="container py-4 px-4 justfy-content-center p-3" >
            <Swiper spaceBetween={10} slidesPerView={5} freeMode={true}>
                <SwiperSlide>
                    <Card className='p-0 overflow-hidden h-100 shadow'>
                        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.GUmTVPS2bDU2gZP3_3IPYwHaE7?pid=ImgDet&rs=1" />
                        <Card.Body className='p-0'>
                            <Card.Title className='text-center font-weight-bold'>Nasi Goreng</Card.Title>
                            <Card.Text className='text-center p-2'>
                                <p className='text-danger font-weight-bold'>Rp. 10.000</p>
                                <Button variant="danger" className='w-50 font-weight-bold'>Pesan</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='p-0 overflow-hidden h-100 shadow'>
                        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.GUmTVPS2bDU2gZP3_3IPYwHaE7?pid=ImgDet&rs=1" />
                        <Card.Body className='p-0'>
                            <Card.Title className='text-center font-weight-bold'>Nasi Goreng</Card.Title>
                            <Card.Text className='text-center p-2'>
                                <p className='text-danger font-weight-bold'>Rp. 10.000</p>
                                <Button variant="danger" className='w-50 font-weight-bold'>Pesan</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='p-0 overflow-hidden h-100 shadow'>
                        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.GUmTVPS2bDU2gZP3_3IPYwHaE7?pid=ImgDet&rs=1" />
                        <Card.Body className='p-0'>
                            <Card.Title className='text-center font-weight-bold'>Nasi Goreng</Card.Title>
                            <Card.Text className='text-center p-2'>
                                <p className='text-danger font-weight-bold'>Rp. 10.000</p>
                                <Button variant="danger" className='w-50 font-weight-bold'>Pesan</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='p-0 overflow-hidden h-100 shadow'>
                        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.GUmTVPS2bDU2gZP3_3IPYwHaE7?pid=ImgDet&rs=1" />
                        <Card.Body className='p-0'>
                            <Card.Title className='text-center font-weight-bold'>Nasi Goreng</Card.Title>
                            <Card.Text className='text-center p-2'>
                                <p className='text-danger font-weight-bold'>Rp. 10.000</p>
                                <Button variant="danger" className='w-50 font-weight-bold'>Pesan</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='p-0 overflow-hidden h-100 shadow'>
                        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.GUmTVPS2bDU2gZP3_3IPYwHaE7?pid=ImgDet&rs=1" />
                        <Card.Body className='p-0'>
                            <Card.Title className='text-center font-weight-bold'>Nasi Goreng</Card.Title>
                            <Card.Text className='text-center p-2'>
                                <p className='text-danger font-weight-bold'>Rp. 10.000</p>
                                <Button variant="danger" className='w-50 font-weight-bold'>Pesan</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='p-0 overflow-hidden h-100 shadow'>
                        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.GUmTVPS2bDU2gZP3_3IPYwHaE7?pid=ImgDet&rs=1" />
                        <Card.Body className='p-0'>
                            <Card.Title className='text-center font-weight-bold'>Nasi Goreng</Card.Title>
                            <Card.Text className='text-center p-2'>
                                <p className='text-danger font-weight-bold'>Rp. 10.000</p>
                                <Button variant="danger" className='w-50 font-weight-bold'>Pesan</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>


            </Swiper>
        </div>
    );
}
