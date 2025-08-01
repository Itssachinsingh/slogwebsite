import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import banner1 from '../images/11.jpg'
import banner2 from '../images/2.jpg'
import banner3 from '../images/3.jpg'
import banner4 from '../images/4.jpg'
import about from '../images/about.png';

export const About = () => {
    return (
        <div>
            <Header />
            <div className='about_us_container'>
                <div className="about_us_top">
                    <img src={banner1} alt="" className='odd_image' />
                    <img src={banner2} alt="" className='even_image' />
                    <img src={banner3} alt="" className='odd_image' />
                    <img src={banner4} alt="" className='even_image' />
                    <div className='about-us-para'>
                        <h4>We are building the Best Training in the Engineering Domain.</h4>
                        <p>Slog Solutions Private Limited, an ISO 9001:2015 certified, Uttarakhand's only MSME certified training company.</p>
                        <p>Student Development Program,
                            Faculty Development Program,
                            Corporate Training</p>
                    </div>
                </div>
                <div className='about-us-details'>
                    <div className="about_us_data">
                        <div className='about_us_stats'><div><i class="fa-solid fa-people-group"></i></div><h2>29.3K</h2><p>STUDENT ENROLLED</p></div>
                    </div>
                    <div className="about_us_data">
                        <div className='about_us_stats'><div><i class="fa-solid fa-chalkboard-user"></i></div><h2>32.4K</h2><p>CLASSES COMPLETED</p></div>
                    </div>
                    <div className="about_us_data">
                        <div className='about_us_stats'><div><i class="fa-solid fa-thumbs-up"></i></div><h2>100%</h2><p>SATISFACTION RATE</p></div>
                    </div>
                    <div className="about_us_data">
                        <div className='about_us_stats'><div><i class="fa-solid fa-person-chalkboard"></i></div><h2>354+</h2><p>TOP INSTRUCTOR</p></div>
                    </div>
                </div>
                <div className='about-us-des'>
                    <div className='des-left'>
                        <img src={about} alt="" />
                    </div>
                    <div className='des-right'>
                        <h2>Grow Your Skills and Learn With Us For Excellence</h2>
                        <p>Established in 2018, Slog offers various technologies training to individuals all over India. We provide exceptional quality training in each and every technology through our skilled trainers who are constantly evolving to achieve their highest potential.</p>
                        <div className='about-us-features'>
                            <div>
                                <div className='features-about'>
                                    <div className='feature-details color-choice1'><i class="fa-solid fa-check"></i></div>
                                    <p>Expert Trainers</p>
                                </div>
                                <div className='features-about'>
                                    <div className='feature-details color-choice2'><i class="fa-solid fa-check"></i></div>
                                    <p>Lifetime Access</p>
                                </div>
                            </div>
                            <div>
                                <div className='features-about'>
                                    <div className='feature-details color-choice3'><i class="fa-solid fa-check"></i></div>
                                    <p>Career Support</p>
                                </div>
                                <div className='features-about'>
                                    <div className='feature-details color-choice4'><i class="fa-solid fa-check"></i></div>
                                    <p>Industry Level Training</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Why Choose Us?</h2>
                    
                </div>


            </div>
            <Footer />
        </div>
    )
}
