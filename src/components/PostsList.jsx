import db from '../services/firebase'
import postDate from '../utils/postDate'
import useCollections from '../hooks/useCollections'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import './styles/PostsList.css'

const PostsList = () => {
  const [data, error, isLoading] = useCollections(db, 'posts')

  const postsDB = data.map((post) => {
    return (
      <div className = 'Post-Container' key = {post.id}>
        <div className = 'Post-profilepic'>
          <img src = 'https://www.teahub.io/photos/full/364-3646944_cool-profile-pictures-hd-pic-hwb37635-cat-with.jpg'
               alt = 'Cat profile pic'
               className = 'post-pic' />
        </div>
        <div className = 'Post-content'>
          <div className = 'Content-stats'>
            <span className = 'stats-username'>{post.username}</span> - <span className = 'stats-date'>{postDate(post.date)}</span>
          </div>
          <div className = 'Content-info'>{post.content}</div>
          <div className = 'Content-likes'>{post.likes}</div>
        </div>

      </div>
    )
  })

  return (
    <div className = 'PostsList wrapper'>
      {isLoading && <Loader type = 'ThreeDots' color = '#FFF' height = {80} width = {80} />}
      {error ? <h1>{error}</h1> : postsDB}
    </div>
  )
}

export default PostsList
