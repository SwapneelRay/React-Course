import Player from "./Components/Player/Player";
import GameBoard from "./Components/GameBoard/GameBoard";
import GameOver from "./Components/GameOver/GameOver";
import { useState } from "react";
import Log from "./Components/Log/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const PLAYERS ={ X: "max", O: "payne" }
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function deriveActivePlayer(Turns) {
  let currentPlayer = "X";
  if (Turns.length > 0 && Turns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function deriveGameBoard(gameTurns){
let gameBoard = [...INITIAL_GAME_BOARD.map((innerarray) => [...innerarray])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard
}

function deriveWinner(gameBoard,players){
  let winner
for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSqurareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSqurareSymbol
    ) {
      winner = players[firstSquareSymbol];
      
    }
  }
  return winner
}
function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  //  const [activePlayer,setActivePlayer] = useState('X');
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard= deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard,players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function selectSquareHandler(rowIndex, columnIndex) {
    //    setActivePlayer((currentActivePlayer)=>currentActivePlayer==='X'?'O':'X')

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: columnIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  function rematchHandler() {
    setGameTurns([]);
  }

  function playerNameChangeHandler(symbol,newName){
    setPlayers(prevplayer=>{
      return {...prevplayer,[symbol]:newName}
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol={"X"}
            isActive={activePlayer === "X"}
            onNameChange={playerNameChangeHandler}
          />
          <Player
            initialName={PLAYERS.O}
            symbol={"O"}
            isActive={activePlayer === "O"}
            onNameChange={playerNameChangeHandler}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={rematchHandler} />
        )}
        <GameBoard onSelectSquare={selectSquareHandler} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
