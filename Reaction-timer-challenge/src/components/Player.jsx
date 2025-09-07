import { useRef,useState } from 'react';
export default function Player() {
  const [playerName,setPlayerName]
  return (
    <section id="player">
      <h2>Welcome unknown</h2>
      <p>
        <input type="text" />
        <button>Set Name</button>
      </p>
    </section>
  );
}
