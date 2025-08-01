import React from 'react'
import { Header } from '../components/Header'
import contact from '../images/contact.jpg'
import { Footer } from '../components/Footer'
export const Contact = () => {
  return (
    <div>
      <Header  color={'white'} />
      <div className='contact_container'>
        <h2>Contact Us</h2>
        <img src={contact} alt="" />
      </div>
      <div className='contact_details'>
        <div className='left_details'>
          <p>/  Get in touch  /</p>
          <h2>We are always ready to help you and answer your questions.</h2>

          <div className='contact_info'>
            <div>
              <h4>Contact Number</h4>
              <p>+(91) 7456000242 <br /> +(91) 7456000243</p>
            </div>
            <div>
              <h4>Our Location</h4>
              <p>SLOG, 1st Floor, Institution of Engineers, ISBT, Dehradun, Uttarakhand 248001</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>info@slogsolutions.com  <br />  slog.doon@gmail.com</p>
            </div>
            <div>
              <h4>Social Media</h4>
              <div className='social_links'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-x-twitter"></i>
              </div>
            </div>

          </div>

        </div>
        <div className='right_details'>
          <h3>Get in Touch</h3>
          <p>Define your goals and identity areas where we can add values in your business.</p>
          <div className='contact_form'>
            <input type="text" className='contact_form' placeholder='Full Name' />
            <input type="text" className='contact_form' placeholder='Email' />
            <input type="text" className='contact_form' placeholder='Subject' />
            <textarea name="" className='contact_form' placeholder='Message'></textarea>
          </div>
          <button> Send  Message &emsp;  <i class="fa-solid fa-angles-right"></i> </button>
        </div>
      </div>
      <Footer/>

    </div>
  )
}
