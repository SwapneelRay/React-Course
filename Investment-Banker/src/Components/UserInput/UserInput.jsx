import { useState } from "react";


export default function UserInput({
  type = "number",
  label,
  onInputChange,
  InitialInput,
  name
}) {
  const [input, setInput] = useState(InitialInput);

  function inputChangeHandler(event) {
    const value = +event.target.value
    setInput(event.target.value);
    onInputChange(name,value)
  }

  return (
    <div id="input-group">
      <p>
      <label>{label}</label>
      <input type={type} value={input} onChange={inputChangeHandler}></input>
      </p>
    </div>
  );
}
