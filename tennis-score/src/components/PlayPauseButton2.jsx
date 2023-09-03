import React from 'react'
import { useDispatch } from 'react-redux'
import { playPause } from '../store';

export default function PlayPauseButton() {
    // On utilise le hook useDispatch 
    // pour récupérer la fonction dispatch de rédux
    const dispatch = useDispatch();
  return (
    // Au click, on dispatche l'action "playPause"
    <button
      className='button'
      onClick={()=>{
      dispatch(playPause())
    }}>
        Pause / Reprendre
    </button>
  )
}