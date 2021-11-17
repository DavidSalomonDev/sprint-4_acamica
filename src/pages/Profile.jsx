import NavbarProfile from 'components/NavbarProfile'
import { UserContext } from 'context/User'
import { useContext } from 'react'

const Profile = () => {

  const { user } = useContext(UserContext)

  return (
    <div className = 'Profile'>
      <NavbarProfile />
      <div className = 'Profile__user'>
        <div className = 'Profile__picture'>
          <img src = {user.photoURL} alt = {user.displayName} style = {{ outline: `1rem solid ${user.color}` }} />
        </div>
        <h3 style = {{ backgroundColor: `${user.color}` }}>{user.displayName}</h3>
      </div>


    </div>
  )
}

export default Profile
