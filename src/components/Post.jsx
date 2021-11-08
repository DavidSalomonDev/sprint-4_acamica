import LikeBtn from 'components/LikeBtn'
import postDate from 'utils/postDate'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

const Post = (props) => {
  const { id, content, date, isLiked, likes, author } = props

  return (
    <div className = 'Post' key = {id}>
      <div className = 'Post__profilePic'>
        <img src = {author.photoURL}
             alt = {author.displayName}
             className = 'Post__profilePic--image' />
      </div>
      <div className = 'Post__info'>
        <div className = 'Post__info--data'>
          <span className = 'Post__info--username'>{author.username}</span> - <span className = 'Post__info--date'>{postDate(date)}</span>
          <button className = 'Post__info--deleteBtn'><DeleteOutlineIcon /></button>
        </div>
        <p className = 'Post__info--content'>{content}</p>
        <div className = 'Post__info--likes'>
          <LikeBtn isLiked = {isLiked} />{likes.length}
        </div>
      </div>

    </div>
  )
}

export default Post
