import  { useState } from "react";
import "./kalkulator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = value => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="title">
        <h1>Kalkulator</h1>
      </div>
      <div className="display">
        {input}
      </div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={handleBackspace}>&larr;</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={calculateResult} className="calculate-result">=</button>
        <button onClick={() => handleClick("%")}>%</button>
        <button onClick={() => handleClick("0")} className="zero">
          0
        </button>
        <button onClick={() => handleClick(".")}>.</button>
      </div>
    </div>
  );
}

export default Calculator;
