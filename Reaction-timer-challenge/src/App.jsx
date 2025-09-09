import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Very Easy"} targetTime={1} />
        <TimerChallenge title={"Normal"} targetTime={5} />
        <TimerChallenge title={"Hard"} targetTime={10} />
        <TimerChallenge title={"Expert"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
