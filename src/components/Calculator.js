import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [states, setState] = useState({});

  const Calculate = (e) => {
    setState(calculate(states, e.target.value));
  };

  const Display = () => {
    const { total, next } = states;
    if (total === null && next == null) {
      return 0;
    }
    if (next === null) {
      return total;
    }
    return next;
  };

  return (
    <div className="Calculator">
      <span className="input"><span className="number">{Display() || 0 }</span></span>
      <button onClick={Calculate} type="submit" value="AC" className="calculatorBtn">AC</button>
      <button onClick={Calculate} type="submit" value="+/-" className="calculatorBtn">+/-</button>
      <button onClick={Calculate} type="submit" value="%" className="calculatorBtn">%</button>
      <button onClick={Calculate} type="submit" value="÷" className="calculatorBtn orange">÷</button>
      <button onClick={Calculate} type="submit" value="7" className="calculatorBtn">7</button>
      <button onClick={Calculate} type="submit" value="8" className="calculatorBtn">8</button>
      <button onClick={Calculate} type="submit" value="9" className="calculatorBtn">9</button>
      <button onClick={Calculate} type="submit" value="×" className="calculatorBtn orange">×</button>
      <button onClick={Calculate} type="submit" value="4" className="calculatorBtn">4</button>
      <button onClick={Calculate} type="submit" value="5" className="calculatorBtn">5</button>
      <button onClick={Calculate} type="submit" value="6" className="calculatorBtn">6</button>
      <button onClick={Calculate} type="submit" value="-" className="calculatorBtn orange">-</button>
      <button onClick={Calculate} type="submit" value="1" className="calculatorBtn">1</button>
      <button onClick={Calculate} type="submit" value="2" className="calculatorBtn">2</button>
      <button onClick={Calculate} type="submit" value="3" className="calculatorBtn">3</button>
      <button onClick={Calculate} type="submit" value="+" className="calculatorBtn orange">+</button>
      <button onClick={Calculate} type="submit" value="0" className="calculatorBtn btn0">0</button>
      <button onClick={Calculate} type="submit" value="." className="calculatorBtn">.</button>
      <button onClick={Calculate} type="submit" value="=" className="calculatorBtn orange">=</button>
    </div>
  );
};

export default Calculator;
