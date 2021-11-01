import { useContext } from 'react'
import { UserContext } from 'context/User'
import Login from 'pages/Login'
import Home from 'containers/Home'
import { BrowserRouter } from 'react-router-dom'

const App = () => {

  const { isLogged } = useContext(UserContext)

  return (
    <BrowserRouter>
      <div className = 'App'>
        {isLogged ? <Home /> : <Login />
        }

      </div>
    </BrowserRouter>
  )
}

export default App
