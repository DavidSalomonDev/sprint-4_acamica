import Navbar from 'components/Navbar'
import NewPost from 'components/NewPost'
import PostsList from 'containers/PostsList'

const Feed = () => {
  return (
    <>
      <Navbar />
      <main className = 'Feed'>
        <NewPost />
        <PostsList />
      </main>
    </>

  )
}

export default Feed
