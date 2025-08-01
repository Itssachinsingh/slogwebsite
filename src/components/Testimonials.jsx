import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import aero from '../images/aero.png';
import quotes from '../images/quotes.png';
import person from '../images/person.png';
import logo from '../images/logo.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Testimonials = () => {

      const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Navigate to the previous slide
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Navigate to the next slide
    }
  };



  return (
    <div className='testimonials_section '>
           <div className='testimonials_container'>
        <div className='testimonials_container_left'>
          <h1>WHAT OUR <br /> CUSTOMERS SAY</h1>
          <div className='testimonials_bottom'>
            <div className='slider_buttons'>
              <div className='aero_container' onClick={handlePrev} ><i className="fa-solid fa-arrow-left fa-lg"></i></div>
              <div className='aero_container' onClick={handleNext} ><i className="fa-solid fa-arrow-right fa-lg"></i></div>
            </div>
            <div className='aero_testimonials'>
              <img src={aero} alt="" />
            </div>
          </div>
        </div>
        <div className='testimonials_container_right'>
          <Slider {...settings} ref={sliderRef}>
            <div className='testimony_main'>
              <div className='quotes_container'><img src={quotes} alt="" /></div>
              <p>"I recently hired a freelancer for a project, and I couldn't be happier with the results. Their work exceeded my expectations in every way. Communication was smooth, deadlines were met, and the quality was outstanding. I highly recommend this freelancer to anyone looking for top-notch skills and professionalism."</p>
              <div className='about_testimony'>
                <div className='about_testimony_left'>
                  <img src={person} alt="" />
                  <div className='testimony_details'>
                    <h3>Thomas Shelby</h3>
                    <p>- CEO at Picky Blinders</p>
                  </div>
                </div>
                <div className='about_testimony_right'>
                  <img src={logo} alt="" />
                </div>
              </div>
            </div>
            <div className='testimony_main'>
              <div className='quotes_container'><img src={quotes} alt="" /></div>
              <p>"I recently hired a freelancer for a project, and I couldn't be happier with the results. Their work exceeded my expectations in every way. Communication was smooth, deadlines were met, and the quality was outstanding. I highly recommend this freelancer to anyone looking for top-notch skills and professionalism."</p>
              <div className='about_testimony'>
                <div className='about_testimony_left'>
                  <img src={person} alt="" />
                  <div className='testimony_details'>
                    <h3>Thomas Shelby</h3>
                    <p>- CEO at Picky Blinders</p>
                  </div>
                </div>
                <div className='about_testimony_right'>
                  <img src={logo} alt="" />
                </div>
              </div>
            </div>
            <div className='testimony_main'>
              <div className='quotes_container'><img src={quotes} alt="" /></div>
              <p>"I recently hired a freelancer for a project, and I couldn't be happier with the results. Their work exceeded my expectations in every way. Communication was smooth, deadlines were met, and the quality was outstanding. I highly recommend this freelancer to anyone looking for top-notch skills and professionalism."</p>
              <div className='about_testimony'>
                <div className='about_testimony_left'>
                  <img src={person} alt="" />
                  <div className='testimony_details'>
                    <h3>Thomas Shelby</h3>
                    <p>- CEO at Picky Blinders</p>
                  </div>
                </div>
                <div className='about_testimony_right'>
                  <img src={logo} alt="" />
                </div>
              </div>
            </div>
            <div className='testimony_main'>
              <div className='quotes_container'><img src={quotes} alt="" /></div>
              <p>"I recently hired a freelancer for a project, and I couldn't be happier with the results. Their work exceeded my expectations in every way. Communication was smooth, deadlines were met, and the quality was outstanding. I highly recommend this freelancer to anyone looking for top-notch skills and professionalism."</p>
              <div className='about_testimony'>
                <div className='about_testimony_left'>
                  <img src={person} alt="" />
                  <div className='testimony_details'>
                    <h3>Thomas Shelby</h3>
                    <p>- CEO at Picky Blinders</p>
                  </div>
                </div>
                <div className='about_testimony_right'>
                  <img src={logo} alt="" />
                </div>
              </div>
            </div>
            <div className='testimony_main'>
              <div className='quotes_container'><img src={quotes} alt="" /></div>
              <p>"I recently hired a freelancer for a project, and I couldn't be happier with the results. Their work exceeded my expectations in every way. Communication was smooth, deadlines were met, and the quality was outstanding. I highly recommend this freelancer to anyone looking for top-notch skills and professionalism."</p>
              <div className='about_testimony'>
                <div className='about_testimony_left'>
                  <img src={person} alt="" />
                  <div className='testimony_details'>
                    <h3>Thomas Shelby</h3>
                    <p>- CEO at Picky Blinders</p>
                  </div>
                </div>
                <div className='about_testimony_right'>
                  <img src={logo} alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

    </div>
  )
}
