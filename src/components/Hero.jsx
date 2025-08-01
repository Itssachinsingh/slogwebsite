import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { TypeAnimation } from 'react-type-animation';


import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner.jpg'
import banner3 from '../images/banner3.jpg'
// import banner2 from '../images/banner.jpg'

export const Hero = () => {
  return (
    <div className='hero_section'>
           <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className='slider_container_des1'>
                        <h2><TypeAnimation
                            sequence={[
                                "Get 250+ Online / Offline Courses.",
                                1000,
                                '100+ Experienced Metors',
                                1000,
                                'Industry level Training curriculum',
                                1000,
                                'Placement supprt System',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            style={{
                                background: 'linear-gradient(90deg,rgb(99, 194, 254),rgb(81, 201, 201),rgb(47, 83, 83))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                height: '10rem',
                                marginBottom: '3rem'
                            }}
                        /></h2>
                        <p>SLOG is MSME certified Enterprise, MCA Approved & ISO Certified Company that provides the Best Summer Training / Internship in Dehradun, 100% Job Guaranteed Training Module, Project Based Training, Placement Assistance and Product Development.</p>
                          
                        <button className='know_btn'>KNOW MORE</button>
                    </div>
                    <img src={banner1} alt="" className='carousel_img' />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider_container_des2'>
                        <h2>Try our latest Products</h2>
                        <p>A wonderful category of top quality gadgets at an affordable price. Be the first to get the deal. First time customers will get 10% on their purhase.</p>
                        <button className='know_btn'>KNOW MORE</button>
                    </div>
                    <img src={banner2} alt="" className='carousel_img' /></SwiperSlide>
                <SwiperSlide>
                    <div className='slider_container_des2'>
                        <h2>Try our latest Products</h2>
                        <p>A wonderful category of top quality gadgets at an affordable price. Be the first to get the deal. First time customers will get 10% on their purhase.</p>
                        <button className='know_btn'>KNOW MORE</button>
                    </div>
                    <img src={banner3} alt="" className='carousel_img' /></SwiperSlide>
                <SwiperSlide>
                    <div className='slider_container_des1'>
                        <h2>Try our latest Products</h2>
                        <p>A wonderful category of top quality gadgets at an affordable price. Be the first to get the deal. First time customers will get 10% on their purhase.</p>
                        <button className='know_btn'>KNOW MORE</button>
                    </div>
                    <img src={banner1} alt="" className='carousel_img' /></SwiperSlide>
            </Swiper>
    </div>
  )
}
