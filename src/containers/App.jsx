import { useContext } from 'react'
import { UserContext } from 'context/User'
import Login from 'pages/Login'
import Home from 'containers/Home'
import { BrowserRouter } from 'react-router-dom'

const App = () => {

  const { user } = useContext(UserContext)

  return (
    <BrowserRouter>
      <div className='App'>
        {user.uid ? <Home /> : <Login />}
      </div>
    </BrowserRouter>
  )
}

export default App
