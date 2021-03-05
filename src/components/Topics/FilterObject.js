import React, { Component } from 'react';
const objToBeFiltered = [
  {
    name: 'Nathaniel',
    number: 7,
    color: 'green',
    position: 'handler',
    throw: 'flick',
    leader: true,
  },
  {
    name: 'Sam',
    number: 75,
    color: 'red',
    position: 'cutter',
  },
  {
    name: 'Fletcher',
    number: 18,
    color: 'orange',

    throw: 'flick',
  },
  {
    name: 'Bryson',
    number: 23,

    position: 'cutter',
    throw: 'backhand',
  },
  {
    name: 'McKay',

    color: 'blue',
    position: 'cutter',
    throw: 'flick',
  },
  {
    name: 'Ziggy',
    number: 45,
    color: 'yellow',
    position: 'handler',
  },
];

export default class FilterObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unFilteredArray: objToBeFiltered,
      userInput: '',
      filteredArray: [],
    };
  }

  updateUserInput = (val) => {
    this.setState({
      userInput: val,
    });
  };

  filterObj = (val) => {
    let oldArrOfObj = this.state.unFilteredArray;
    let answer = oldArrOfObj.filter((objInArr) => objInArr[val]);
    this.setState({
      filteredArray: answer,
      userInput: '',
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={(e) => {
            this.updateUserInput(e.target.value);
          }}
          value={this.state.userInput}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.filterObj(this.state.userInput);
          }}
        >
          Filter the Object
        </button>
        <span className="resultsBox filterObjectRB">
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
