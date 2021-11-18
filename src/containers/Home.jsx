import { UserContext } from 'context/User'
import Profile from 'pages/Profile'
import { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Feed from 'pages/Feed'

const Home = () => {
  const { user } = useContext(UserContext)
  return (
    <div className = 'Home'>
      <Switch>
        <Route path = '/' exact>
          {!user.uid ? <Redirect to = '/' /> : <Redirect to = '/feed' />}
        </Route>
        <Route component = {Feed} path = '/feed' exact />
        <Route component = {Profile} path = '/profile' exact />
      </Switch>

    </div>
  )
}

export default Home
