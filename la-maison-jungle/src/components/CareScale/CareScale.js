import React from 'react'
import sun from '../../assets/sun.svg'
import water from '../../assets/water.svg'


const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
}

export default function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3]
    const scaleType = careType==='light'
        ? (<img src={sun} alt='sun-icon' />)
        : (<img src={water} alt='water-icon' />)
  return (
    <div onClick={(event) => {
        alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${careType==='light'?'de lumière':"d'arrosage"}`)
        event.stopPropagation()
    }}>
    {
        range.map( (elmnt) => (
            scaleValue >= elmnt
                && <span key={elmnt.toString()}>{scaleType}</span>
        ))
    }
    </div>
  )
}
