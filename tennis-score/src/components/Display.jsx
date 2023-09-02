import React from 'react'
import { useSelector } from 'react-redux'
import { selectDisplayText } from '../selectors'


export function Display() {
  const displayText = useSelector(selectDisplayText);

  return <p className='display'>{displayText}</p>
}




/*
function Display() {
    // Le hook useSelector à accès au state global de redux et
    // prend en paramètre une fonction lui permettant d'extraire
    // les éléments souhaités du state global. L'avantage de useSelector
    // est qu'il fait la mise à jour du composant tout comme useState Mais 
    // seulement sur la partie du state global sélectionné.
    const gameIsPlaying = useSelector((state)=>state.playing);
    const winner        = useSelector((state)=>state.winner);
    const player1Score  = useSelector((state)=>state.player1); 
    const player2Score  = useSelector((state)=>state.player2);
    const advantage     = useSelector((state)=>state.advantage);

    if (winner) {
      if (winner === "player1") {
        return <p className='display'>Joueur 1 gagne</p>;
      }else{
        return <p className='display'>Joueur 2 gagne</p>;
      }
    }else if (gameIsPlaying === false) {
      return <p className='display'>C'est la pause</p>;
    }else{
      let text = "le score est: " + player1Score + " - " + player2Score;
      if (advantage) {
        if (advantage === "player1") {
          text += " avantage joueur 1";
        }else{
          text += " avantage joueur 2";
        }
      }
      return <p className='display'>{text}</p>;
    }
}

export default Display
*/