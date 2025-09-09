import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime}) {
    
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();

  const timerisActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    
    dialog.current.open();
  }

  function resetHandler(){
    setTimeRemaining(targetTime * 1000);
  }
  function startHandler() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function stopHandler() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={resetHandler}/>
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerisActive ? stopHandler : startHandler}>
            {timerisActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerisActive ? "active" : ""}>
          Time is running.../Timer inactive
        </p>
      </section>
    </>
  );
}
