import { UserContext } from 'context/User'
import { useContext, useState } from 'react'
import { addPost } from 'api/posts/add'

const NewPost = () => {

  const { user } = useContext(UserContext)

  const [charCounter, setCharCounter] = useState(0)
  const [newPost, setNewPost] = useState('')

  const handleInput = (e) => {
    setCharCounter(e.target.value.length)
    setNewPost(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (newPost.length < 1) return
    const newDoc = {
      content: newPost,
      date: new Date(),
      likes: [],
      author: {
        displayName: user.displayName,
        color: user.color,
        photoURL: user.photoURL,
        uid: user.uid,
        username: user.username,
      },
    }
    await addPost(newDoc)
    setCharCounter(0)
    setNewPost('')
  }

  return (
    <section className='NewPost'>
      <div className='NewPost__picture' style={{ outline: `.5rem solid ${user.color}` }}>
        <img className='NewPost__picture--image'
          src={user.photoURL}
          alt={user.displayName}
        />
      </div>
      <form className='NewPost__form' onSubmit={handleSubmit}>
        <textarea
          onChange={handleInput}
          maxLength='200'
          className='NewPost__form--input'
          value={newPost}
          placeholder="What's happening?" />
        <div className='progressbar'
          style={{ width: charCounter / 2 + '%' }}></div>
        <div className='NewPost__stats'>
          <span className='stats--counter'>{charCounter}</span>
          <span className='stats--max'>200 max.</span>
        </div>
        <button className='NewPost__form--button button'>Post</button>
      </form>
    </section>

  )
}

export default NewPost
