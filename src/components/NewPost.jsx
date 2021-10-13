import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore/lite'
import { db } from '../services/firebase'
import './styles/NewPost.css'

const NewPost = () => {
  const [charCounter, setCharCounter] = useState(0)
  const [newPost, setNewPost] = useState('')

  const handleInput = (e) => {
    setCharCounter(e.target.value.length)
    setNewPost(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newPost.length < 1) return
    const postsCollection = collection(db, 'posts')
    addDoc(postsCollection, {
      content: newPost,
      date: new Date(),
      username: 'test',
      likes: 0,
    })
    setCharCounter(0)
    setNewPost('')
  }

  return (
    <div className = 'NewPost'>
      <div className = 'NewPost-space wrapper'>
        <div className = 'NewPost-picContainer'>
          <img className = 'NewPost-pic profile-pic'
               src = 'https://www.teahub.io/photos/full/364-3646944_cool-profile-pictures-hd-pic-hwb37635-cat-with.jpg'
               alt = 'Cat Profile pic' />
        </div>
        <form className = 'NewPost-form' onSubmit = {handleSubmit}>
					<textarea
            onChange = {handleInput}
            maxLength = '200'
            className = 'form-input'
            value = {newPost}
            placeholder = "What's happening?" />
          <div className = 'form-progressbar'
               style = {{ width: charCounter / 2 + '%' }}></div>
          <div className = 'form-stats'>
            <span className = 'form-counter'>{charCounter}</span>
            <span className = 'form-max'>200 max.</span>
          </div>
          <button className = 'form-button'>Post</button>
        </form>
      </div>
    </div>

  )
}

export default NewPost
