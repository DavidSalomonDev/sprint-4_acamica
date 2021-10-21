import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className = 'Navbar'>
      <li className = 'Navbar__item'>
        <div className = 'Navbar__item__profile'>
          <img className = 'Navbar__item__profile--pic'
               src = 'https://www.teahub.io/photos/full/364-3646944_cool-profile-pictures-hd-pic-hwb37635-cat-with.jpg'
               alt = 'Cat Profile pic' />
        </div>


      </li>
      <li className = 'Navbar__item'>
        <Link to = '/' title = 'Home'>
          <img className = 'Navbar__item__logo logo--image'
               src = 'https://firebasestorage.googleapis.com/v0/b/devs-united-f1635.appspot.com/o/favicon.ico?alt=media&token=0ed9a2ae-1647-44fb-903a-67cc539687f5'
               alt = 'Home' />
        </Link>
      </li>
      <li className = 'Navbar__item'>
        <img className = 'Navbar__item__logo logo--letters'
             src = 'https://firebasestorage.googleapis.com/v0/b/devs-united-f1635.appspot.com/o/letters.svg?alt=media&token=cc6179e9-f9aa-4ab1-8325-df650ff1f46d'
             alt = 'Devs_United' />
      </li>
    </nav>
  )
}

export default Navbar
