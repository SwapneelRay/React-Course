import { useState } from "react";
import Result from "./Components/Result/Result";
import UserInput from "./Components/UserInput/UserInput";

const INITAL_USER_INPUT = {
  initialInvestment: 1000,
  annualInvestment: 100,
  expectedReturn: 12,
  duration: 12,
};

function App() {
  const [userInput, setUserInput] = useState(INITAL_USER_INPUT);
  
  function userInputChangeHandler(key, value) {
    
    setUserInput((prevInput) => {
      return { ...prevInput, [key]: value };
    });
    
  }
  const inputIsValid = userInput.duration>=1
  return (
    <>
      <div id="user-input">
        <UserInput
          name={"initialInvestment"}
          label={"Initial Amount"}
          InitialInput={INITAL_USER_INPUT.initialInvestment}
          onInputChange={userInputChangeHandler}
        ></UserInput>
        <UserInput
          type="number"
          name={"annualInvestment"}
          label={"Anunnal investment"}
          InitialInput={INITAL_USER_INPUT.annualInvestment}
          onInputChange={userInputChangeHandler}
        ></UserInput>
        <UserInput
          label={"Expected Return"}
          name={"expectedReturn"}
          InitialInput={INITAL_USER_INPUT.expectedReturn}
          onInputChange={userInputChangeHandler}
        ></UserInput>
        <UserInput
          label={"duration"}
          name={"duration"}
          InitialInput={INITAL_USER_INPUT.duration}
          onInputChange={userInputChangeHandler}
        ></UserInput>
      </div>
      {!inputIsValid && <p className="center">Please enter a valid duration</p>}
      {inputIsValid && <Result data={userInput}/>}
    </>
  );
}

export default App;
