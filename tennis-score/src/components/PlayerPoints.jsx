import React from 'react'
import { useSelector } from 'react-redux'
import { selectPlayerPoints } from '../selectors'

export default function PlayerPoints({playerID, playerName}) {
    const playerPoints = useSelector(selectPlayerPoints(playerID));


  return (
    <div className='player-games'>
        <p>{playerName}</p>
        <p>{
            playerPoints === 0
                ? "Aucun jeu gagné"
                : playerPoints === 1
                    ? `${playerPoints} jeu gagné`
                    : `${playerPoints} jeux gagnés`
        }</p>
    </div>
  )
}
