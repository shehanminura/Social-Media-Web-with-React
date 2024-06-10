import './chatbox.css';
import CurrentUserData from '../../FackApis/CurrentUserData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons';

import Stories from '../../components/stories/Stories';

export default function ChatBox() {
  const user = CurrentUserData[0];

  return (
    <>
      <Stories />
      <div className='chat-box'>
        <div className='chat-box-top'>
          <img src={user.ProfieImage} alt='Profile' />
          <div className='user-name'>
            <h3>{user.name}</h3>
            <h5>{user.username}</h5>
          </div>
        </div>
        <div className='chat-box-bottom'>
          <form action='#'>
            <input type='text' placeholder='Write Something' />
            <button type='submit' className='btn btn-primary'>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
            <label className='btn btn-primary' htmlFor='CFile'>
              <FontAwesomeIcon icon={faFileAlt} />
              <input type='file' id='CFile' />
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
