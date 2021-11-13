import { useContext } from 'react'
import { UserContext } from 'context/User'
import Login from 'pages/Login'
import Home from 'containers/Home'
import { BrowserRouter } from 'react-router-dom'
import Options from 'pages/Options'

const App = () => {

  const { user } = useContext(UserContext)

  return (
    <BrowserRouter>
      <div className='App'>
        {!user.uid ? <Login /> : !user.color || !user.username ? <Options /> : <Home />}
      </div>
    </BrowserRouter>
  )
}

export default App
