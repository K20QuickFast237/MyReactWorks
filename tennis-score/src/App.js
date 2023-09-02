import React from "react";
import PlayPauseButton from "./components/PlayPauseButton";
import { Display } from "./components/Display";
import PointScoredButton from "./components/PointScoredButton";
import ResetButton from "./components/ResetButton";
import PlayerScore from "./components/PlayerScore";
import PlayerPoints from "./components/PlayerPoints";

function App() {
  return (
    <div>
      <PlayerPoints playerID="player1" playerName={"Player 1"} />
      <PlayerPoints playerID="player2" playerName={"Player 2"} />
      <Display />
      <PlayerScore playerID="player1" playerName={"Player 1"} />
      <PlayerScore playerID="player2" playerName={"Player 2"} />
      <div className="buttons-row">
        <PointScoredButton playerID="player1">Point Joueur 1</PointScoredButton>
        <PointScoredButton playerID="player2">Point Joueur 2</PointScoredButton>
      </div>
      <div className="buttons-row">
        <ResetButton />
        <PlayPauseButton />
      </div>
    </div>
  );
}

export default App;
