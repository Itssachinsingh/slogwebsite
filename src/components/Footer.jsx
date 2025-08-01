import React from 'react'
import logo from '../images/logo.png'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_top'>
            <img src={logo} alt="" />
            <h2>Get started with any desired Course /  <br />Training for Future Excellence.</h2>
            <div><input type="search" placeholder='Enter Your Email' /><button>Let's Go</button></div>
        </div>
        <div className='footer_bottom'>
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>F&Qs</li>
                <li>Centers</li>
                <li>Gallery</li>
            </ul>
        </div>
    </div>
  )
}

