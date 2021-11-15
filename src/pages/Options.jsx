import { UserContext } from 'context/User'
import React, { useContext } from 'react'
import { colors } from 'utils/colors'

const Options = () => {

  const { user } = useContext(UserContext)

  const colorOptions = colors.map(color => {
    return (
      <div className = {`Options__colors--${color.name}`} key = {color.id}>
        <label htmlFor = {color.name} name = 'colors'>
          <div className = 'Options__squareColor'
               style = {{ backgroundColor: `${color.hex}` }}></div>
        </label>
        <input type = 'radio' id = {color.name} value = {color.hex} name = 'colors' />
      </div>
    )
  })

  return (
    <main className = 'Options'>
      <img className = 'Options--logo'
           src = 'https://firebasestorage.googleapis.com/v0/b/devs-united-f1635.appspot.com/o/logo%20big.svg?alt=media&token=c0c257b9-aa85-4b0e-9bff-1274c984f9e6'
           alt = 'Devs_United' />
      <form className = 'Options__form'>
        <div className = 'Options__username'>
          <label htmlFor = 'username'
                 className = 'Options__welcome'>Welcome <div className = 'Options__name'>{user.displayName.replace(/ .*/, '')}!</div>
          </label>
          <input type = 'text' id = 'username' placeholder = 'Type your username' />
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
