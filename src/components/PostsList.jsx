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
        <div className = 'Post-profilepic'>
          <img src = 'https://www.teahub.io/photos/full/364-3646944_cool-profile-pictures-hd-pic-hwb37635-cat-with.jpg'
               alt = 'Cat profile pic'
               className = 'post-pic' />
        </div>
        <div className = 'Post-content'>
          <div className = 'Content-stats'>
            <span className = 'stats-username'>{post.username}</span> - <span className = 'stats-date'>{postDate(post.date)}</span>
          </div>
          <div className='Content-info'>{post.content}</div>
          <div className='Content-likes'>{post.likes}</div>
        </div>

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
