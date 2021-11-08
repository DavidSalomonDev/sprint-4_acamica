import { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState({
    accessToken: '',
    displayName: '',
    email: '',
    photoURL: '',
    uid: '',
    username: '',
    color: '',
  })

  return (
    <UserContext.Provider value = {{ isLogged, setIsLogged, user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
