import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

export default function Signup() {
  return (
    <div className="signup">
      <div className='card'>
        <div className="left">
          <h2>-<br/>NapaExtra Signup<br/>-</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            nostrum, vitae eum ipsam libero delectus optio!
          </p>
          <span>Have An Account?</span>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
        <form className="right">
          <input type='text' required placeholder='Username' />
          <input type='email' required placeholder='Email' />
          <input type='password' required placeholder='Password' />
          <button type='submit' className='btn'>Register</button>
        </form>
      </div>
    </div>
  );
}
