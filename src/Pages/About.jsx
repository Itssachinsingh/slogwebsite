import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import banner1 from '../images/11.jpg'
import banner2 from '../images/2.jpg'
import banner3 from '../images/3.jpg'
import banner4 from '../images/4.jpg'
import about from '../images/about.png';
import access from '../images/access2.png'
import quality from '../images/quality2.png';
import industry from '../images/Idustry2.jpg'
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

                <div className='choose_container'>
                    <h2>Why Choose Us?</h2>
                    <div className='choose-us-container'>
                        <div className='choose-us-cards'>
                            <div className='choose-image'><img src={access} alt="" /></div>
                            <div className='choose-us-des'>
                                <h4>Life Time Access</h4>
                                <p>Learning doesn't end when the course does. Our dedicated support team is here to assist you every step of the way, from enrollment to graduation and beyond. Whether you have questions about course content or need help navigating career opportunities, we're always here to help.</p>
                            </div>
                        </div>
                        <div className='choose-us-cards'>
                            <div className='choose-image'><img src={quality} alt="" /></div>
                            <div className='choose-us-des'>
                                <h4>High Quality Courses</h4>
                                <p>Are you ready to take your expertise to the next level? At Slog Solutions, we specialize in providing top-tier training solutions designed to empower individuals and organizations with the knowledge they need to succeed.</p>
                            </div>
                        </div>
                        <div className='choose-us-cards'>
                            <div className='choose-image'><img src={industry} alt="" /></div>
                            <div className='choose-us-des'>
                                <h4>Industry Level Exposure</h4>
                                <p>Our courses are led by industry experts with years of experience in their respective fields. They bring real-world insights and practical knowledge to the classroom, ensuring that you receive the most relevant and up-to-date training available.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='email-input-container'>
                    <input type="text" className='email-input' placeholder='Choose from 50+ Professional Courses'/><button>Enroll Now</button>
                </div>

            </div>
            <Footer />
        </div>
    )
}
