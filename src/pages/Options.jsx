import { UserContext } from 'context/User'
import { doc, updateDoc } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import db from 'services/firebase.config'
import { colors } from 'utils/colors'

const Options = () => {
  const [color, setColor] = useState('')
  const [username, setUsername] = useState('')

  const { user } = useContext(UserContext)

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleOptions = (e) => {
    e.preventDefault()
    console.log(user)
    const userRef = doc(db, 'users', user.id)
    updateDoc(userRef, {
      username,
      color,
    })

  }

  const colorOptions = colors.map(colorEl => {
    const colorHandler = (e) => {
      setColor(e.target.value)
    }

    return (
      <div className = {`Options__colors--${colorEl.name}`} key = {colorEl.id}>
        <label htmlFor = {colorEl.name} name = 'colors'>
          <div className = 'Options__squareColor'
               style = {{
                 backgroundColor: `${colorEl.hex}`,
                 outline: `${color === colorEl.hex ? '.4rem solid #fff' : 'none'}`,
               }}></div>
        </label>
        <input onClick = {colorHandler}
               title = {colorEl.name}
               type = 'radio'
               id = {colorEl.name}
               value = {colorEl.hex}
               name = 'colors' />
      </div>
    )
  })

  return (
    <main className = 'Options'>
      <img className = 'Options--logo'
           src = 'https://firebasestorage.googleapis.com/v0/b/devs-united-f1635.appspot.com/o/logo%20big.svg?alt=media&token=c0c257b9-aa85-4b0e-9bff-1274c984f9e6'
           alt = 'Devs_United' />
      <form onSubmit = {handleOptions} className = 'Options__form'>
        <div className = 'Options__username'>
          <label htmlFor = 'username'
                 className = 'Options__welcome'>Welcome <div className = 'Options__name'>{user.displayName.replace(/ .*/, '')}!</div>
          </label>
          <input onChange = {handleUsername} type = 'text' id = 'username' placeholder = 'Type your username' />
        </div>
        <h2 className = 'Options__colors--title'>Select your favorite color:</h2>
        <div className = 'Options__colors'>
          {colorOptions}
        </div>
        <button className = 'Options__submit' type = 'submit'>Continue</button>
      </form>
      <footer className = 'Footer'>
        <p>&#169; 2021 Devs_United by David Salomón - <span>BETA</span></p>
      </footer>
    </main>
  )
}

export default Options
