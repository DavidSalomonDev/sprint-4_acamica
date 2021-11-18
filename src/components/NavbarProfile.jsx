import { UserContext } from 'context/User'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Logout } from 'services/auth'

const NavbarProfile = () => {

  const { user, setUser } = useContext(UserContext)

  const handleLogout = async () => {
    await Logout()
    setUser({})
  }

  return (
    <nav className = 'NavbarProfile'>
      <Link to = '/' title = 'Home' style = {{ textDecoration: 'none' }}>
        <div className = 'NavbarProfile__username'>
          <h3><span>{'<'}</span>{user.username}</h3>
        </div>
      </Link>
      <div className = 'NavbarProfile__button'>
        <button onClick = {handleLogout} className = 'button'>Logout <ExitToAppIcon fontSize = 'large' /></button>
      </div>

    </nav>
  )
}

export default NavbarProfile
