import NewPost from 'components/NewPost'
import PostsList from 'containers/PostsList'

const Feed = () => {
  return (
    <main className = 'Feed'>
      <NewPost />
      <PostsList />
    </main>
  )
}

export default Feed
