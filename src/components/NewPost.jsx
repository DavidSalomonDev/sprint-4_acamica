import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import db from '../services/firebase'

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
      isLiked: false,
      likes: 0,
      username: 'test',
    })
    setCharCounter(0)
    setNewPost('')
  }

  return (
    <section className = 'NewPost'>
      <div className = 'NewPost__picture'>
        <img className = 'NewPost__picture--image'
             src = 'https://www.teahub.io/photos/full/364-3646944_cool-profile-pictures-hd-pic-hwb37635-cat-with.jpg'
             alt = 'Cat Profile pic' />
      </div>
      <form className = 'NewPost__form' onSubmit = {handleSubmit}>
					<textarea
            onChange = {handleInput}
            maxLength = '200'
            className = 'NewPost__form--input'
            value = {newPost}
            placeholder = "What's happening?" />
        <div className = 'progressbar'
             style = {{ width: charCounter / 2 + '%' }}></div>
        <div className = 'NewPost__stats'>
          <span className = 'stats--counter'>{charCounter}</span>
          <span className = 'stats--max'>200 max.</span>
        </div>
        <button className = 'NewPost__form--button button'>Post</button>
      </form>
    </section>

  )
}

export default NewPost
