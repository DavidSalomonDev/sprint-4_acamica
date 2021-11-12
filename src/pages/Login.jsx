import GoogleBtn from 'components/GoogleBtn'
import { UserContext } from 'context/User'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  browserSessionPersistence, setPersistence,
} from 'firebase/auth'
import { useContext, useEffect } from 'react'

const Login = () => {

  const { setUser } = useContext(UserContext)
  const auth = getAuth()

  useEffect(() => {
    setPersistence(auth, browserSessionPersistence).then(() => {
      auth.currentUser && setUser(auth.currentUser)
    })
  }, [auth, setUser])

  const googleAuth = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then((result) => {

        //const credential = GoogleAuthProvider.credentialFromResult(result)
        //const token = credential.accessToken

        // The signed-in user info.
        const user = result.user

        // Actions with the user
        setUser(user)

      })
      .catch((error) => {
        // Handle Errors here.

        //const errorCode = error.code
        const errorMessage = error.message

        // The email of the user's account used.
        //const email = error.email

        // The AuthCredential type that was used.
        //const credential = GoogleAuthProvider.credentialFromError(error)

        // Actions with error message
        console.log('error', errorMessage)
      })
  }

  return (
    <div className='Login'>
      <img className='Login--logo'
        src='https://firebasestorage.googleapis.com/v0/b/devs-united-f1635.appspot.com/o/logo%20big.svg?alt=media&token=c0c257b9-aa85-4b0e-9bff-1274c984f9e6'
        alt='Devs_United' />
      <h2>A social network for Developers</h2>
      <p>This is a project created by David Salomón for Acamica in Sprint 4.</p>
      {/* <button className='Login__button button' onClick={googleAuth}>Login</button> */}
      <GoogleBtn onClick={googleAuth} />
    </div>
  )
}

export default Login
