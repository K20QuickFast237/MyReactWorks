/**-----------------------------------------------------------
 * Ce fichier contient un ensemble de fonctions qui ......
 * -----------------------------------------------------------
 */



// Retourne un selescteur pour l'etat avantagé où non du joueur
export function selectPlayerHasAdvantage(playerID){
    return (state)=>state.advantage === playerID;
}

export function selectPlayerIsWinner(playerID){
    return (state) => state.winner===playerID;
}

export const selectPlayerScore = (playerID)=>{
    return (state)=>state[playerID];
};

export const selectPlayerPoints = (playerID) => {
    return (state) => state.history.filter(
        (item) => item.winner === playerID
    ).length;
};

export const selectDisplayText = (state) => {
    if (state.winner) {
        if (state.winner === 'player1') {
            return "Joueur 1 gagne";
        }else {
            return "Joueur 2 gagne";
        }
    }
    // else if (state.playing === false) {
    //     return "C'est la pause";
    // }
    else{
        let text = "Le score est: "+ state.player1 +" - "+ state.player2;

        if (state.advantage) {
            if (state.advantage === "player1") {
                text += "avantage joueur 1";
            }else {
                text += "avantage joueur 2";
            }
        }

        return text;
    }

};

export function selectPointBeforeWin(playerID) {
    const otherPlayerID = playerID === "player1" ? "player2" : "player1";

    return (state)=>{
        if (state.winner) {
            return null;
        }
        if (state.advantage === playerID) {
            return 1;
        }
        if (state.advantage === otherPlayerID) {
            return 3;
        }

        const playerScore      = state[playerID];
        const otherPlayerScore = state[otherPlayerID];
        const pointsTo40       = playerScore === 0
                                    ? 3
                                    : playerScore === 15
                                        ? 2
                                        : playerScore === 30
                                            ? 1
                                            : 0;
        if (otherPlayerScore === 40) {
            return pointsTo40 + 2;
        }

        return pointsTo40 + 1;
    }
}
