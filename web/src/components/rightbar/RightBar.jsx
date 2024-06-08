import './rightbar.css'

// components......................
import Message from '../message/Message'
import FriendReqe from '../friendReqe/FriendReqe'

export default function RightBar() {
  return (
    <div className='rightBar'>
      <div className="right-container">
        <Message />
        <FriendReqe/>
      </div>
    </div>
  )
}
