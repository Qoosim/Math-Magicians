import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '0',
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="calc-grid">
        <div className="output-div">
          <div className="output">
            { total || ''}
            { operation || ''}
            { next || ''}
          </div>
        </div>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
        >
          AC
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
        >
          +/-
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
        >
          %
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
          className="operation"
        >
          ÷
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
        >
          7
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
        >
          8
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
        >
          9
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
          className="operation"
        >
          x
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
        >
          4
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
        >
          5
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
        >
          6
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
          className="operation"
        >
          -
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
        >
          1
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
        >
          2
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
        >
          3
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
          className="operation"
        >
          +
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
          className="span-two"
        >
          0
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
        >
          .
        </button>
        <button
          type="button"
          onClick={(event) => this.handleClick(event)}
          className="operation"
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
