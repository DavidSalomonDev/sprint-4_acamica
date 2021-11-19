import { UserContext } from 'context/User'
import Login from 'pages/Login'
import Profile from 'pages/Profile'
import { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Feed from 'pages/Feed'

const Home = () => {
  const { user } = useContext(UserContext)
  return (
    <div className = 'Home'>
      <Switch>
        <Route path = '/' exact>
          {!user.uid ? <Login /> : <Feed />}
        </Route>
        <Route component = {Feed} path = '/feed' exact />
        <Route component = {Profile} path = '/profile' exact />
      </Switch>

    </div>
  )
}

export default Home
