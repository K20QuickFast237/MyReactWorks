import React from 'react'
import { useSelector } from 'react-redux'
import { selectPlayerHasAdvantage, selectPlayerIsWinner, selectPointBeforeWin } from '../selectors';

export default function PlayerScore({playerID, playerName}) {
    const score           = useSelector((state)=>state[playerID]);
    // const hasAdvantage = useSelector((state)=>state.advantage === playerID);
    const hasAdvantage    = useSelector(selectPlayerHasAdvantage(playerID));
    const pointsBeforeWin = useSelector(selectPointBeforeWin(playerID));
    const isWinner        = useSelector(selectPlayerIsWinner(playerID));
  return (
    <div className='player-score'>
        <p>
            {playerName}
            {pointsBeforeWin === null
                ? ""
                :` (encore ${pointsBeforeWin} ${pointsBeforeWin >1 ? "points" : "point"})`
            }
        </p>
        <p>{
            isWinner 
                ? "Winner - " + score
                : (hasAdvantage ? "Avantage - " : "") + score
        }</p>
    </div>
  )
}