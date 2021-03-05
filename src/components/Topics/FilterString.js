import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unFilteredArry: ['this', 'is', 'an', 'array', 'of', 'strings'],
      userInput: '',
      filteredArry: [],
    };
  }

  updateUserInput = (val) => {
    this.setState({
      userInput: val,
    });
  };

  filterStr = () => {
    let arrThatNeedsToBeFilter = this.state.unFilteredArry;
    let answer = arrThatNeedsToBeFilter.filter((val) =>
      val.includes(this.state.userInput)
    );
    this.setState({
      filteredArry: answer,
      userInput: '',
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter FilterString</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArry)}
        </span>
        <input
          className="inputLine"
          onChange={(e) => {
            this.updateUserInput(e.target.value);
          }}
          value={this.state.userInput}
        />
        <button className="confirmationButton" onClick={this.filterStr}>
          Filter String
        </button>
        <span className="resultsBox filterStringRB">
          {JSON.stringify(this.state.filteredArry)}
        </span>
      </div>
    );
  }
}
