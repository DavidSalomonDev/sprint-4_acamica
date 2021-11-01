import { UserContext } from "context/User"
import { useContext } from "react"

const Login = () => {

  const { setIsLogged } = useContext(UserContext)

  const handleLogin = () => {
    setIsLogged(true)
  }

  return (
    <div className = 'Login'>
      <img className = 'Login--logo'
           src = 'https://firebasestorage.googleapis.com/v0/b/devs-united-f1635.appspot.com/o/logo%20big.svg?alt=media&token=c0c257b9-aa85-4b0e-9bff-1274c984f9e6'
           alt = 'Devs_United' />
      <h2>Under construction</h2>
      <button className = 'Login__button button' onClick = {handleLogin}> Login</button>
    </div>
  )
}

export default Login
