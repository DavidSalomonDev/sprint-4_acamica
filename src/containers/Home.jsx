import { Route } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Feed from 'pages/Feed'

const Home = () => {
  return (
    <div className = 'Home'>
      <Navbar />
      <Route component = {Feed} path = '/' exact />
    </div>
  )
}

export default Home
