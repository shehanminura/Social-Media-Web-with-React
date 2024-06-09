// src/components/comments/Comments.jsx

import './comments.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CommentData from '../../FackApis/CommentData';
import CurrentUserData from '../../FackApis/CurrentUserData';

export default function Comments() {
  const [commentText, setCommentText] = useState('');
  const currentUser = CurrentUserData[0]; // Assuming you have at least one user in CurrentUserData

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Logic to handle comment submission
    console.log('Comment submitted:', commentText);
    setCommentText(''); // Clear the input field after submission
  };

  return (
    <div className='comments'>
      <div className='writebox'>
        <form onSubmit={handleCommentSubmit}>
          <div className='user'>
            <img src={currentUser.ProfieImage} alt='' />
            <input
              type='text'
              placeholder='Write a comment'
              value={commentText}
              onChange={handleCommentChange}
            />
            <button type='submit' className='btn btn-primary'>Send</button>
          </div>
        </form>
      </div>
      {CommentData.map(comment => (
        <Link to={`/profile/${comment.userid}`} key={comment.id}>
          <div className='user'>
            <img src={comment.commentProfile} alt='' />
            <div>
              <h5>{comment.name}</h5>
              <p>{comment.CommeText}</p>
            </div>
            <small>1h</small>
          </div>
        </Link>
      ))}
    </div>
  );
}
