import NavbarProfile from 'components/NavbarProfile'
import FavoritePosts from 'containers/FavoritePosts'
import OwnPosts from 'containers/OwnPosts'
import { UserContext } from 'context/User'
import { useContext, useState } from 'react'

const Profile = () => {

  const { user } = useContext(UserContext)
  const [option, setOption] = useState('posts')

  const handleStyle = (state) => {
    if (option === state) {
      return { backgroundColor: '#60265B' }
    } else {
      return
    }
  }

  return (
    <div className = 'Profile'>
      <NavbarProfile />
      <div className = 'Profile__user'>
        <div className = 'Profile__picture'>
          <img src = {user.photoURL} alt = {user.displayName} style = {{ outline: `1rem solid ${user.color}` }} />
        </div>
        <h3 style = {{ backgroundColor: `${user.color}` }}>{user.displayName}</h3>
      </div>
      <nav className = 'Profile__options'>
        <ul>
          <li onClick = {() => {
            setOption('posts')
          }} style = {handleStyle('posts')}>Posts
          </li>
          <li onClick = {() => {
            setOption('favorites')
          }} style = {handleStyle('favorites')}>Favorites
          </li>
        </ul>
      </nav>
      <main className = 'Profile__posts'>
        {(option === 'posts') ? <OwnPosts /> : <FavoritePosts />}
      </main>

    </div>
  )
}

export default Profile
