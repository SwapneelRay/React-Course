import { useState } from "react";
export default function Player({ initialName, symbol,isActive,onNameChange }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setEditing] = useState(false);
  function editClickHandler() {
    setEditing((editing)=>!editing);

    if(isEditing){
      onNameChange(symbol,playerName)
    }

  }
  function playerNameChangeHandler(event){
  setPlayerName(event.target.value)
  }

  return (
    <li className={isActive?"active":undefined}>
      <span className="player">
      {isEditing ? (
        <input type="text" value={playerName} required onChange={playerNameChangeHandler}></input>
      ) : (
        <span className="player-name">
          {playerName}
        </span>
      )}
        </span>
        <span className="player-symbol">{symbol}</span>
        <button onClick={editClickHandler}>{isEditing?'Save':'Edit'}</button>
    </li>
  );
}
