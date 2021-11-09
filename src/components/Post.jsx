import LikeBtn from 'components/LikeBtn'
import { UserContext } from 'context/User'
import { useContext } from 'react'
import postDate from 'utils/postDate'
import DeleteBtn from './DeleteBtn'

const Post = (props) => {
  const { id, content, date, likes, author } = props

  const { user } = useContext(UserContext)

  const isLiked = () => likes.includes(user.uid)

  return (
    <div className='Post' key={id}>
      <div className='Post__profilePic'>
        <img src={author.photoURL}
          alt={author.displayName}
          className='Post__profilePic--image' />
      </div>
      <div className='Post__info'>
        <div className='Post__info--data'>
          <span className='Post__info--username'>{author.username}</span> - <span className='Post__info--date'>{postDate(date)}</span>
          {user.uid === author.uid && <DeleteBtn id={id} />}
        </div>
        <p className='Post__info--content'>{content}</p>
        <div className='Post__info--likes'>
          <LikeBtn isLiked={isLiked} id={id} />{likes.length}
        </div>
      </div>

    </div>
  )
}

export default Post
