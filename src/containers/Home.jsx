import Profile from 'pages/Profile'
import { Route, Switch } from 'react-router-dom'
import Feed from 'pages/Feed'

const Home = () => {

  return (
    <div className = 'Home'>
      <Switch>
        <Route component = {Feed} path = '/feed' exact />
        <Route component = {Profile} path = '/profile' exact />
      </Switch>

    </div>
  )
}

export default Home
