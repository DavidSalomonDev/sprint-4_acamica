import { UserContext } from 'context/User'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth'
import { useContext, useEffect } from 'react'

const Login = () => {

  const { setUser } = useContext(UserContext)
  const auth = getAuth()

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      setUser(auth.currentUser)
    })
  }, [])

  const googleAuth = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then((result) => {

        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
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

  const logout = () => {
    signOut(auth).then(() => {
      setUser({})
    })
  }

  return (
    <div className = 'Login'>
      <img className = 'Login--logo'
           src = 'https://firebasestorage.googleapis.com/v0/b/devs-united-f1635.appspot.com/o/logo%20big.svg?alt=media&token=c0c257b9-aa85-4b0e-9bff-1274c984f9e6'
           alt = 'Devs_United' />
      <h2>Under construction</h2>
      <button className = 'Login__button button' onClick = {googleAuth}>Login</button>
    </div>
  )
}

export default Login
