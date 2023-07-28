import React from 'react'
import '../styles/Banner.css'
import '../assets/logo.png'

function Banner() {
    const titre = 'La maison Jungle';
  return (
    <div className='lmj-banner'>
        <img src={logo} alt='la maison jungle' className='lmj-logo' />
        <h1>{titre.toUpperCase()}</h1>
    </div>
  )
}

export default Banner