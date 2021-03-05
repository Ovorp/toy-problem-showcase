import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: '',
    };
  }

  userStr = (val) => {
    this.setState({
      userInput: val,
    });
  };

  splitArr = () => {
    let theEvenArr = [];
    let theOddArr = [];
    let theStr = this.state.userInput.split(',');
    for (const key of theStr) {
      key % 2 === 0 ? theEvenArr.push(key) : theOddArr.push(key);
    }
    this.setState({
      evenArray: theEvenArr,
      oddArray: theOddArr,
      userInput: '',
    });
  };

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(e) => {
            this.userStr(e.target.value);
          }}
          value={this.state.userInput}
        />
        <button className="confirmationButton" onClick={this.splitArr}>
          Split
        </button>
        <span className="resultsBox">
          The Even Numbers: [{this.state.evenArray}]
        </span>
        <span className="resultsBox">
          The Odd Numbers: [{this.state.oddArray}]
        </span>
      </div>
    );
  }
}
