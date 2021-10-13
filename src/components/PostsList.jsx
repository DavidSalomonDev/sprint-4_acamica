import { db } from '../services/firebase'
import { collection, getDocs } from 'firebase/firestore/lite'
import { useEffect, useState } from 'react'
import postDate from '../utils/postDate'
import sortDate from '../utils/sortDate'
import './styles/PostsList.css'

const PostsList = () => {
  const [getPosts, setGetPosts] = useState([])

  const fetchData = async () => {
    const postsArray = []
    const postsCollection = collection(db, 'posts')
    getDocs(postsCollection).then(posts => {
      posts.forEach(post => {
        let date = new Date(post.data().date.toDate())
        postsArray.push({ ...post.data(), id: post.id, date })
      })
      const sortedArray = sortDate(postsArray)
      setGetPosts(sortedArray)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const postsDB = getPosts.map((post, idx) => {
    return (
      <div className = 'Post-Container wrapper' key = {post.id}>
        <div>{post.username} - {postDate(post.date)}</div>
        <div>{post.content}</div>
      </div>
    )
  })

  return (
    <div className = 'PostsList'>
      {postsDB}
    </div>
  )
}

export default PostsList
