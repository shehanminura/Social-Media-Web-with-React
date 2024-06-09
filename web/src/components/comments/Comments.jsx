import './comments.css';
import { Link } from 'react-router-dom';  // First import

// Fake Api....
import CommentData from '../../FackApis/CommentData';
import CurrentUserData from '../../FackApis/CurrentUserData';
// Remove the duplicate import
// import { Link } from 'react-router-dom'; // Second import (remove this)

export default function Comments() {


useeffe
  return (
    <div className='comments'>
        <div className='writebox'>
            <form action='#'>
                <div className='user'>
                    <img src={CurrentUserData.map(user => user.ProfieImage)} alt=''/>
                    <input type='text' placeholder='Write a comment'/>
                    <button type='submit' className='btn btn-primary'>Send</button>
                </div>
            </form>
        </div>
        {
            CommentData.map(comment => (
                <Link to='/profile/id' key={comment.id}> {/* Move key to Link component */}
                    <div className='user'>
                        <img src={comment.commentProfile} alt=''/>
                        <div>
                            <h5>{comment.name}</h5>
                            <p>{comment.CommeText}</p>
                        </div>
                        <small>1h</small>
                    </div>
                </Link>
            ))
        }
    </div>
  );
}
