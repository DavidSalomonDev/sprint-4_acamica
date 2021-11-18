import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Empty from 'components/Empty'
import { UserContext } from 'context/User'
import useCollections from 'hooks/useCollections'
import { useContext } from 'react'
import Loader from 'react-loader-spinner'
import Post from 'components/Post'
import db from 'services/firebase.config'

const FavoritePosts = () => {

  const { user } = useContext(UserContext)

  const [data, isLoading, error] = useCollections(db, 'posts')

  const filteredData = data.filter(post => {
    return post.likes.includes(user.uid)
  })

  const postsDB = filteredData.map((post) => {
    return (
      <Post key = {post.id}
            {...post} />
    )
  })

  if (isLoading) {
    return (<div className = 'Login__loading'>
      <Loader type = 'TailSpin'
              color = '#FFF'
              height = {200}
              width = {200}
              timeout = {3000} />
    </div>)
  } else {
    return (
      <div className = 'FavoritePosts'>
        {error ? <h1>{error}</h1> : postsDB.length === 0 ? <Empty /> : postsDB}
      </div>
    )
  }

}

export default FavoritePosts
