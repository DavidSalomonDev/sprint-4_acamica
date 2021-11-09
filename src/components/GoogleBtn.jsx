import React from 'react'

const GoogleBtn = ({ onClick }) => {
    return (
        <div onClick={onClick} className='g-sign-in-button'>
            <div className='content-wrapper'>
                <div className='logo-wrapper'>
                    <img src='https://developers.google.com/identity/images/g-logo.png' alt='Google Logo' />
                </div>
                <span className='text-container'>
                    <span>Sign in with Google</span>
                </span>
            </div>
        </div>
    )
}

export default GoogleBtn
