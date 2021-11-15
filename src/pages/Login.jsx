import GoogleBtn from 'components/GoogleBtn'
import { UserContext } from 'context/User'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  browserSessionPersistence, setPersistence,
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import useCollections from 'hooks/useCollections'
import React, { useContext, useEffect } from 'react'
import db from 'services/firebase.config'

const Login = () => {
  const [data] = useCollections(db, 'users')
  const { setUser } = useContext(UserContext)
  const auth = getAuth()

  useEffect(() => {
    let isMounted = true
    setPersistence(auth, browserSessionPersistence).then(() => {
      if (isMounted) auth.currentUser && setUser(auth.currentUser)
    })
    return () => {
      isMounted = false
    }
  }, [auth, setUser])

  const googleAuth = async () => {
    const provider = new GoogleAuthProvider()
    const authResult = await signInWithPopup(auth, provider)
    const userCredentials = authResult.user

    // Actions with the user
    if (!userCredentials) return
    const doesExist = data.find(({ uid }) => uid === userCredentials.uid)
    if (doesExist) {
      setUser(doesExist)
    } else {
      const newUser = {
        displayName: userCredentials.displayName,
        email: userCredentials.email,
        photoURL: userCredentials.photoURL,
        uid: userCredentials.uid,
        username: '',
        color: '',
      }
      const usersCollection = collection(db, 'users')
      addDoc(usersCollection, newUser)
      setUser(newUser)
    }
  }

  return (
    <div className = 'Login'>
      <img className = 'Login--logo'
           src = 'https://firebasestorage.googleapis.com/v0/b/devs-united-f1635.appspot.com/o/logo%20big.svg?alt=media&token=c0c257b9-aa85-4b0e-9bff-1274c984f9e6'
           alt = 'Devs_United' />
      <h2>A social network for Developers</h2>
      <p>This is a project created by David Salomón for Acamica in Sprint 4.</p>
      <GoogleBtn onClick = {googleAuth} />
      <footer className = 'Footer'>
        <p>&#169; 2021 Devs_United by David Salomón - <span>BETA</span></p>
      </footer>
    </div>
  )
}

export default Login
