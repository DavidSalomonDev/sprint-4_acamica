import { Link } from 'react-router-dom'
import './styles/Navbar.css'

const Navbar = () => {
	return (
		<header className='Header'>
			<nav className='Navbar wrapper'>
				<li className='Navbar-item'>
					<Link to='/' title='Home'>
						<img className='Navbar-item-home' src='https://firebasestorage.googleapis.com/v0/b/devs-united-f1635.appspot.com/o/favicon.ico?alt=media&token=0ed9a2ae-1647-44fb-903a-67cc539687f5' alt='Home'/>
					</Link>
				</li>
				<li className='Navbar-item Navbar-item-logo'>
					<img src="https://firebasestorage.googleapis.com/v0/b/devs-united-f1635.appspot.com/o/letters.svg?alt=media&token=cc6179e9-f9aa-4ab1-8325-df650ff1f46d" alt="Devs_United" />
				</li>
				<li className='Navbar-item'>Profile</li>
			</nav>
		</header>
	)
}

export default Navbar