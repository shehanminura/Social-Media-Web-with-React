import { Link } from 'react-router-dom';
import './userProfile.css';
import CurrentUserData from '../../FackApis/CurrentUserData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeed, faLink, faMessage } from '@fortawesome/free-solid-svg-icons';

export default function UserProfile() {
  const user = CurrentUserData[0];

  return (
    <div className='userProfile'>
      <div className='cover-photos'>
        <img src={user.CoverPhoto} alt='Cover' />
      </div>
      <div className='profile-info'>
        <img src={user.ProfieImage} alt='Profile' />
        <div className='user-name'>
          <h3>{user.name}</h3>
          <h5>{user.username}</h5>
        </div>
        <div className='profile-button'>
          <Link to='/chatbox/id'>
            <button className='btn btn-primary'>
              <FontAwesomeIcon icon={faMessage} />
            </button>
          </Link>
          <button className='btn btn-primary'>
            <FontAwesomeIcon icon={faFeed} /> Follow Me
          </button>
          <button className='btn btn-primary'>
            <FontAwesomeIcon icon={faLink} />
          </button>
        </div>
        <p className='bio'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. quasi alias libero consequatur eius expedita impedit?
        </p>
      </div>
    </div>
  );
}
