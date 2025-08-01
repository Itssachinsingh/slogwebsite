import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import web from '../images/web-design.jpg'

const courseData = {
    "Computer Science": [
        "C Language", "Java", "C++", "Cyber Security", "Machine Learning", "Web Designing",
        "Data Structure and Algorithms", "CCNP"
    ],
    "Civil Tools": ["Revit", "SketchUp", "AutoCAD Civil", "ETABS", "3DsMax"],
    "Mechanical Tools": ["AutoCAD Mech", "SolidWorks", "CATIA", "Ansys"],
    "EE / EC": ["Internet of Things (IoT)", "Robotics", "Embedded Systems", "PLC SCADA"],
    "Architecture": ["AutoCAD Architecture"],
    "Specialized": ["Digital Marketing", "CISSP", "Corporate Training", "Advance Excel"]
};


export const Course = () => {
    const [selectedCategory, setSelectedCategory] = useState('Computer Science');

    return (
        <div className='course_container'>
            <h1>All Courses on Slog</h1>
            <p className='course_para'>Choose a Course to Start your Journey towards Greatness!</p>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={5}
                loop={true}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                className='custom-swiper'
            >
                <SwiperSlide onClick={() => setSelectedCategory("Computer Science")}>
                    <div className='course_sliders'>
                        <p>Computer Science</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => setSelectedCategory("Civil Tools")}>
                    <div className='course_sliders'>
                        <p>Civil Engineer</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => setSelectedCategory("Mechanical Tools")}>
                    <div className='course_sliders'>
                        <p>Mechanical Tools</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => setSelectedCategory("Architecture")}>
                    <div className='course_sliders'>
                        <p>Architecture</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => setSelectedCategory("Specialized")}>
                    <div className='course_sliders'>
                        <p>Specialized</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={() => setSelectedCategory("EE / EC")}>
                    <div className='course_sliders'>
                        <p>EE / EC</p>
                    </div>
                </SwiperSlide>

            </Swiper>


            <div className='course_cards_container'>
                {selectedCategory && courseData[selectedCategory]?.map((course, idx) => (
                    <div key={idx} className='course_cards'>
                        <div className='course_img_container'><img src={web} alt="" /></div>
                        <p>{course}</p>
                        <div className='timline'><i className="fa-regular fa-clock"></i>2 months</div>
                        <p>Price - ₹ XX</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
