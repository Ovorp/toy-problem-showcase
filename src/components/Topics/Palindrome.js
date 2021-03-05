import React, { Component } from 'react';

export default class Palindrome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      palindrome: '',
    };
  }

  updateUserInput = (val) => {
    this.setState({
      userInput: val,
      palindrome: '',
    });
  };

  isPalindrome = () => {
    let word = this.state.userInput.toLowerCase();
    let revWord = word.split('').reverse().join('');
    if (word === revWord) {
      this.setState({
        userInput: '',
        palindrome: 'True',
      });
    } else {
      this.setState({
        userInput: '',
        palindrome: 'False',
      });
    }
  };

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome Checker</h4>
        <input
          className="inputLine"
          onChange={(e) => {
            this.updateUserInput(e.target.value);
          }}
          value={this.state.userInput}
        />
        <button className="confirmationButton" onClick={this.isPalindrome}>
          Check if it is a Palindrome
        </button>
        <span className="resultsBox">
          Is this a Palindrome: {this.state.palindrome}
        </span>
      </div>
    );
  }
}
