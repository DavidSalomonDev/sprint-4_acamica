import { Route } from 'react-router'
import Navbar from '../components/Navbar'
import Posts from '../pages/Posts'

const Home = () => {
  return (
    <>
      <Navbar />
      <Route component = {Posts} path = '/' exact />
    </>
  )
}

export default Home
