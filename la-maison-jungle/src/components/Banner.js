import React from 'react'
import '../styles/Banner.css'

function Banner({children}) {
    // const titre = 'La maison Jungle';
  return (
    <div className='lmj-banner'>
        {children}
    </div>
  )
}

export default Banner