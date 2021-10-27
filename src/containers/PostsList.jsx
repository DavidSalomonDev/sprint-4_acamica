import db from 'services/firebase'
import useCollections from 'hooks/useCollections'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import Post from 'components/Post'

const PostsList = () => {
  const [data, error, isLoading] = useCollections(db, 'posts')

  const postsDB = data.map((post) => {
    return (
      <Post key = {post.id}
            {...post} />
    )
  })

  return (
    <div className = 'PostsList'>
      {isLoading && <Loader type = 'ThreeDots' color = '#FFF' height = {80} width = {80} />}
      {error ? <h1>{error}</h1> : postsDB}
    </div>
  )
}

export default PostsList
