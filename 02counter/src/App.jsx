import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(prev => prev + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(prev => prev - 1);
    } else {
      alert("Counter can't be less than 0");
    }
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const squareValue = () => {
    if (counter <= 1) {
      return alert("Counter must be greater than 1 to square");
    }
    setCounter(counter * counter);
  };

  const averageValue = () => {
    if (counter <= 1) {
      return alert("Counter must be greater than 1 to average");
    }
    setCounter(counter / 2);
  };

  return (
    <>
      <h1 className='counter'>Counter App</h1>
      <h2>Counter value: {counter}</h2>
      <button className='buttons' onClick={addValue}>Add Value</button>
      <br />
      <button className='buttons' onClick={removeValue}>Remove Value</button>
      <br />
      <button className='buttons' onClick={squareValue}>Square Value</button>
      <br />
      <button className='buttons' onClick={averageValue}>Average Value</button>
      <br />
      <button className='buttons' onClick={resetCounter}>Reset</button>
    </>
  );
}

export default App;
