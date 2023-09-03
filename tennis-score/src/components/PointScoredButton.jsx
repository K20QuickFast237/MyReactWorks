import React from 'react'
import { useDispatch } from 'react-redux'
import { pointScored } from '../store';

export default function PointScoredButton({playerID, children}) {
    const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="button"
      onClick={ ()=>dispatch(pointScored(playerID)) }
    >
      {children}
    </button>
  )
}
