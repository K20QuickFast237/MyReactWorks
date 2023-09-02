import React from 'react'
import { useDispatch, useStore } from 'react-redux'
import { autoPlay } from '../store';

export default function PlayPauseButton() {
  const dispatch = useDispatch();
  const store = useStore();

  return (
    <button
      className='button'
      onClick={()=>{
        autoPlay(store);
      }}
    >
      Pause / Reprendre
    </button>
  )
}