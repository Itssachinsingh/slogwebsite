import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Login = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Header />
      <div className='auth_container'>
        <div className='auth_left'>
          <span>Slog Solutions</span>
          <h1>Start Your Journey with us.</h1>
          <p>Discover the world's best courses in core technology and become skilled in the rapidly evolving era.</p>
        </div>

        {showLogin ? (
          <div className='auth_right'>
            <h2>Sign Up</h2>
            <div className='sign_up_form'>
              <div className='sign_up_name'>
                <div>
                  <p>First Name</p>
                  <input type="text" className='sign_up_input' />
                </div>
                <div>
                  <p>Last Name</p>
                  <input type="text" className='sign_up_input' />
                </div>
              </div>
              <p>Username</p>
              <input type="text" />
              <p>Email</p>
              <input type="email" />
              <p>Create Password</p>
              <input type="password" />
              <p>Confirm Password</p>
              <input type="password" />
            </div>
            <button>Sign Up</button>
            <p>Already have an account? <span onClick={() => setShowLogin(false)}>Log In.</span></p>
          </div>
        ) : (
          <div className='auth_right'>
            <h2>Log In</h2>
            <div className='sign_up_form'>
              <p>Email or Username</p>
              <input type="text" />
              <p>Password</p>
              <input type="password" />
            </div>
            <button>Log In</button>
            <p>Don't have an account? <span onClick={() => setShowLogin(true)}>Sign Up.</span></p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
