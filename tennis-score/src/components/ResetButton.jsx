import React from 'react'
import { useDispatch } from 'react-redux'
import { restartGame } from '../store';

export default function ResetButton() {
    const dispatch = useDispatch();

  return (
    <button
        type="button"
        className='button'
        onClick={ ()=>dispatch(restartGame()) }
    >
        Remettre à zero
    </button>
  )
}
