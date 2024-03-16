// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

<<<<<<< HEAD
const CommentItem = props => {
=======
commentItem = props => {
>>>>>>> 7d4dd58727c6b3add35a05dfe17b3674c0bc9ae0
  const {commentDetails} = props
  const {id, username, comment, date, isLiked, initialClassName} =
    commentDetails

<<<<<<< HEAD
  const initial = username ? username[0].toUpperCase() : ''
=======
  const initial = username ? username[0].toUppercase() : ''
>>>>>>> 7d4dd58727c6b3add35a05dfe17b3674c0bc9ae0
  const postedTime = formatDistanceToNow(date)
  const likeTextClassName = isLiked ? 'active-button' : 'button'
  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  const onClickLike = () => {
    const {toggleIsLike} = props
    toggleIsLike(id)
  }
  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="user-time-container">
            <p className="username"> {username} </p>
            <p className="time">{postedTime} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImgUrl} alt="like" className="like-icon" />
<<<<<<< HEAD
          <button
            type="button"
            className={likeTextClassName}
            onClick={onClickLike}
          >
=======
          <button type="button" className={likeTextClassName} onClick={onClickLike}>
>>>>>>> 7d4dd58727c6b3add35a05dfe17b3674c0bc9ae0
            Like
          </button>
        </div>
        <button type="button" className="delete-btn" onClick={onDeleteComment}>
<<<<<<< HEAD
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
=======
          <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" alt="delete" className="delete-icon" />
>>>>>>> 7d4dd58727c6b3add35a05dfe17b3674c0bc9ae0
        </button>
      </div>
    </li>
  )
}

<<<<<<< HEAD
export default CommentItem
=======
export default commentItem
>>>>>>> 7d4dd58727c6b3add35a05dfe17b3674c0bc9ae0
