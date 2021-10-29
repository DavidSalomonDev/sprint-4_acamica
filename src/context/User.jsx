import { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <UserContext.Provider value = {{ isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  )
}
