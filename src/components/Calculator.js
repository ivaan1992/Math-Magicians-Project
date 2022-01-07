import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Calculator">
        <input className="input" value="0" />
        <div className="btns">
          <button type="submit" className="calculatorBtn">AC</button>
          <button type="submit" className="calculatorBtn">+/-</button>
          <button type="submit" className="calculatorBtn">%</button>
          <button type="submit" className="calculatorBtn orange">÷</button>
          <button type="submit" className="calculatorBtn">7</button>
          <button type="submit" className="calculatorBtn">8</button>
          <button type="submit" className="calculatorBtn">9</button>
          <button type="submit" className="calculatorBtn orange">×</button>
          <button type="submit" className="calculatorBtn">4</button>
          <button type="submit" className="calculatorBtn">5</button>
          <button type="submit" className="calculatorBtn">6</button>
          <button type="submit" className="calculatorBtn orange">-</button>
          <button type="submit" className="calculatorBtn">1</button>
          <button type="submit" className="calculatorBtn">2</button>
          <button type="submit" className="calculatorBtn">3</button>
          <button type="submit" className="calculatorBtn orange">+</button>
          <button type="submit" className="calculatorBtn btn0">0</button>
          <button type="submit" className="calculatorBtn">.</button>
          <button type="submit" className="calculatorBtn orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
