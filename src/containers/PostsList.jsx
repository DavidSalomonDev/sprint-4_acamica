import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import useCollections from 'hooks/useCollections'
import Loader from 'react-loader-spinner'
import Post from 'components/Post'
import db from 'services/firebase.config'

const PostsList = () => {

  const [data, isLoading, error] = useCollections(db, 'posts')

  /*const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  const fetchPosts = async () => {
    setIsLoading(true)
    try {
      const postsLists = await getPosts()
      setData(postsLists)
    } catch (e) {
      setError(e.message)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])*/

  const postsDB = data.map((post) => {
    return (
      <Post key = {post.id}
            {...post} />
    )
  })

  return (
    <div className = 'PostsList'>
      {isLoading && <Loader type = 'ThreeDots' color = '#FFF' height = {180} width = {180} />}
      {error ? <h1>{error}</h1> : postsDB}
    </div>
  )
}

export default PostsList
