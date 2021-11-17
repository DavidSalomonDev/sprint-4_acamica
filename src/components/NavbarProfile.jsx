import { UserContext } from 'context/User'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const NavbarProfile = () => {

  const { user } = useContext(UserContext)

  return (
    <nav className = 'NavbarProfile'>
      <Link to = '/' title = 'Home' style = {{ textDecoration: 'none' }}>
        <div className = 'NavbarProfile__username'>
          <h3><span>{'<'}</span>{user.username}</h3>
        </div>
      </Link>
      <div className = 'NavbarProfile__button'>
        <button className = 'button'>Logout <ExitToAppIcon fontSize = 'large' /></button>
      </div>

    </nav>
  )
}

export default NavbarProfile
