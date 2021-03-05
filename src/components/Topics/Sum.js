import React, { Component } from 'react';

export default class Sum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
  }
  updateNumber1 = (val) => {
    this.setState({
      number1: val,
    });
  };
  updateNumber2 = (val) => {
    this.setState({
      number2: val,
    });
  };

  toSum = () => {
    this.setState({
      sum: parseInt(this.state.number1) + parseInt(this.state.number2),
    });
  };

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={(e) => {
            this.updateNumber1(e.target.value);
          }}
          value={this.state.number1}
        />
        <input
          className="inputLine"
          onChange={(e) => {
            this.updateNumber2(e.target.value);
          }}
          value={this.state.number2}
        />
        <button className="confirmationButton" onClick={this.toSum}>
          Sum
        </button>
        <span className="resultsBox">The Sum is: {this.state.sum}</span>
      </div>
    );
  }
}
