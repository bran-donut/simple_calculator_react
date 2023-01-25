import { useState } from "react";
import { Buttons } from "./components/Buttons";

let operands = ['/', '+', '-', '*']

function App() {

const [currentValue, setCurrentValue] = useState("");
const [prevValue, setPrevValue] = useState("");
const [currentOperand, setCurrentOperand] = useState("");

const buttonClick = (e) => {
    if(operands.includes(e.target.value)){
        setCurrentOperand(e.target.value);
        if(!operands.includes(e.target.value)){
        setCurrentValue(currentValue + e.target.value);
      }
        updateValue(currentOperand);
    }
    else if(currentValue.includes('.') && e.target.value=='.'){
      return;
    }
    else{
      setCurrentValue(currentValue + e.target.value);
    }
}

function updateValue(operand) {
  if(prevValue.length > 0 & currentValue.length !== 0) {
    setPrevValue(calculateValue(operand).toString());
    setCurrentValue('')
  }
  else if(currentValue !== '') {
    setPrevValue(currentValue);
    setCurrentValue('')
  }
  else {
    return;
  }
}

function deleteNumber() {
  setCurrentValue(currentValue.slice(0,-1));
  setCurrentOperand('')
}

function clearNumber() {
  setCurrentValue('');
  setPrevValue('');
}

function calculateValue(operand) {
  switch(operand) {
    case '/':
      return parseInt(prevValue)/parseInt(currentValue);
    case '*':
      return parseInt(prevValue)*parseInt(currentValue);
    case '+':
      return parseInt(prevValue)+parseInt(currentValue);
    case '-':
      return parseInt(prevValue)-parseInt(currentValue);
    default:
      return
    }
}

function submitCalc(){
  updateValue(currentOperand);
}

  return (
    <div className="App">
      <header className="App-header">
        <title>Calculator</title>
        </header>
        <div className="Calculator">
          <div className="Display">
            {prevValue.length > 0 && <div>
              {prevValue}
            </div>}
            {currentValue.length > 0 && <div>
              {currentValue}
            </div>}
            {currentOperand.length > 0 && <p>
              {currentOperand}
            </p>}
            <button onClick={deleteNumber} className="clear-button">C</button>
          </div>
        <Buttons buttonClick={buttonClick} clearNumber={clearNumber} submitCalc={submitCalc}/>
     </div>
    </div>
  );
}

export default App;
