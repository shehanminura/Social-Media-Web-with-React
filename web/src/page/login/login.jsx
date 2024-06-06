import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  return (
    <div className="Login">
      <div className='card'>
        <div className="left">
          <h2>-<br/>NapaExtra<br/>-</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            nostrum, vitae eum ipsam libero delectus optio!
          </p>
          <span>Don't Have An Account?</span>
          <Link to='/signup'>
          <button className='btn btn-primary'>Register</button>
          </Link>
        </div>
        <form className="right">
          <input type='text' required placeholder='Username'/>
          <input type='password' required placeholder='Password'/>
          <button type='submit' className='btn'>Login</button>
        </form>
      </div>
    </div>
  );
}
