import React from 'react'
import '../styles/Banner.css'

function Banner() {
    const titre = 'La maison Jungle';
  return (
    <div style={{
        color: 'black',
        textAlign: 'right',
        padding: 32,
        borderBottom: 'solid 3px black'
    }}>
        <h1>{titre.toUpperCase()}</h1>
    </div>
  )
}

export default Banner