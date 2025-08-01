import React from 'react'
import js from '../images/js.png'
import css from '../images/css.png'
import python from '../images/python.jpg'
import { StarRating } from '../components/StarRating'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Courses = () => {
    return (
        <div>
            <Header />
            <div className='course_banner'>
                <div className='course_banner_effect'>
                    <h1> Our Courses</h1>
                </div>
                <div className='course_list'>
                    <div className='course_single'>
                        <img src={js} alt="" />
                        <div>
                            <div className='course_category'>Computer Science</div>
                            <h2 className='course_title'>Java Programming</h2>
                            <div className='course_features'>
                                <div className='features_container lesson'><i class="fa-solid fa-book-bookmark"></i><p>15 Lessons</p></div>
                                <div className='features_container'><i class="fa-solid fa-graduation-cap"></i><p>15 Students</p></div>
                            </div>
                            <div className='ratings'><StarRating rating={3.5} /><p>(315 reviews)</p></div>
                            <div className='description'>
                                <div className='enrolling'><span>Enroll</span><div className='enroll_link'><i class="fa-solid fa-arrow-right"></i></div></div>
                                <div className='price'><span>₹ 19,900/-</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='course_single'>
                        <img src={css} alt="" />
                        <div>
                            <div className='course_category'>Computer Science</div>
                            <h2 className='course_title'>Java Programming</h2>
                            <div className='course_features'>
                                <div className='features_container lesson'><i class="fa-solid fa-book-bookmark"></i><p>15 Lessons</p></div>
                                <div className='features_container'><i class="fa-solid fa-graduation-cap"></i><p>15 Students</p></div>
                            </div>
                            <div className='ratings'><StarRating rating={3.5} /><p>(315 reviews)</p></div>
                            <div className='description'>
                                <div className='enrolling'><span>Enroll</span><div className='enroll_link'><i class="fa-solid fa-arrow-right"></i></div></div>
                                <div className='price'><span>₹ 19,900/-</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='course_single'>
                        <img src={python} alt="" />
                        <div>
                            <div className='course_category'>Computer Science</div>
                            <h2 className='course_title'>Java Programming</h2>
                            <div className='course_features'>
                                <div className='features_container lesson'><i class="fa-solid fa-book-bookmark"></i><p>15 Lessons</p></div>
                                <div className='features_container'><i class="fa-solid fa-graduation-cap"></i><p>15 Students</p></div>
                            </div>
                            <div className='ratings'><StarRating rating={3.5} /><p>(315 reviews)</p></div>
                            <div className='description'>
                                <div className='enrolling'><span>Enroll</span><div className='enroll_link'><i class="fa-solid fa-arrow-right"></i></div></div>
                                <div className='price'><span>₹ 19,900/-</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='course_single'>
                        <img src={css} alt="" />
                        <div>
                            <div className='course_category'>Computer Science</div>
                            <h2 className='course_title'>Java Programming</h2>
                            <div className='course_features'>
                                <div className='features_container lesson'><i class="fa-solid fa-book-bookmark"></i><p>15 Lessons</p></div>
                                <div className='features_container'><i class="fa-solid fa-graduation-cap"></i><p>15 Students</p></div>
                            </div>
                            <div className='ratings'><StarRating rating={3.5} /><p>(315 reviews)</p></div>
                            <div className='description'>
                                <div className='enrolling'><span>Enroll</span><div className='enroll_link'><i class="fa-solid fa-arrow-right"></i></div></div>
                                <div className='price'><span>₹ 19,900/-</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='course_single'>
                        <img src={python} alt="" />
                        <div>
                            <div className='course_category'>Computer Science</div>
                            <h2 className='course_title'>Java Programming</h2>
                            <div className='course_features'>
                                <div className='features_container lesson'><i class="fa-solid fa-book-bookmark"></i><p>15 Lessons</p></div>
                                <div className='features_container'><i class="fa-solid fa-graduation-cap"></i><p>15 Students</p></div>
                            </div>
                            <div className='ratings'><StarRating rating={3.5} /><p>(315 reviews)</p></div>
                            <div className='description'>
                                <div className='enrolling'><span>Enroll</span><div className='enroll_link'><i class="fa-solid fa-arrow-right"></i></div></div>
                                <div className='price'><span>₹ 19,900/-</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='course_single'>
                        <img src={js} alt="" />
                        <div>
                            <div className='course_category'>Computer Science</div>
                            <h2 className='course_title'>Java Programming</h2>
                            <div className='course_features'>
                                <div className='features_container lesson'><i class="fa-solid fa-book-bookmark"></i><p>15 Lessons</p></div>
                                <div className='features_container'><i class="fa-solid fa-graduation-cap"></i><p>15 Students</p></div>
                            </div>
                            <div className='ratings'><StarRating rating={3.5} /><p>(315 reviews)</p></div>
                            <div className='description'>
                                <div className='enrolling'><span>Enroll</span><div className='enroll_link'><i class="fa-solid fa-arrow-right"></i></div></div>
                                <div className='price'><span>₹ 19,900/-</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='course_single'>
                        <img src={css} alt="" />
                        <div>
                            <div className='course_category'>Computer Science</div>
                            <h2 className='course_title'>Java Programming</h2>
                            <div className='course_features'>
                                <div className='features_container lesson'><i class="fa-solid fa-book-bookmark"></i><p>15 Lessons</p></div>
                                <div className='features_container'><i class="fa-solid fa-graduation-cap"></i><p>15 Students</p></div>
                            </div>
                            <div className='ratings'><StarRating rating={3.5} /><p>(315 reviews)</p></div>
                            <div className='description'>
                                <div className='enrolling'><span>Enroll</span><div className='enroll_link'><i class="fa-solid fa-arrow-right"></i></div></div>
                                <div className='price'><span>₹ 19,900/-</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='course_single'>
                        <img src={js} alt="" />
                        <div>
                            <div className='course_category'>Computer Science</div>
                            <h2 className='course_title'>Java Programming</h2>
                            <div className='course_features'>
                                <div className='features_container lesson'><i class="fa-solid fa-book-bookmark"></i><p>15 Lessons</p></div>
                                <div className='features_container'><i class="fa-solid fa-graduation-cap"></i><p>15 Students</p></div>
                            </div>
                            <div className='ratings'><StarRating rating={3.5} /><p>(315 reviews)</p></div>
                            <div className='description'>
                                <div className='enrolling'><span>Enroll</span><div className='enroll_link'><i class="fa-solid fa-arrow-right"></i></div></div>
                                <div className='price'><span>₹ 19,900/-</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='course_single'>
                        <img src={python} alt="" />
                        <div>
                            <div className='course_category'>Computer Science</div>
                            <h2 className='course_title'>Java Programming</h2>
                            <div className='course_features'>
                                <div className='features_container lesson'><i class="fa-solid fa-book-bookmark"></i><p>15 Lessons</p></div>
                                <div className='features_container'><i class="fa-solid fa-graduation-cap"></i><p>15 Students</p></div>
                            </div>
                            <div className='ratings'><StarRating rating={3.5} /><p>(315 reviews)</p></div>
                            <div className='description'>
                                <div className='enrolling'><span>Enroll</span><div className='enroll_link'><i class="fa-solid fa-arrow-right"></i></div></div>
                                <div className='price'><span>₹ 19,900/-</span></div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                            <Footer/>

            </div>
        </div>
    )
}