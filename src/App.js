import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      birthdate: '',
      age: null,
    };
  }

  calculateAge = () => {
    const birthdate = new Date(this.state.birthdate);
    const today = new Date();
    const ageInMilliseconds = today - birthdate;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    this.setState({ age: Math.floor(ageInYears) });
  };

  handleDateChange = (e) => {
    this.setState({ birthdate: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Age Calculator</h1>
        <div className="AgeCalculator">
          <label>Enter your birthdate:</label>
          <input
            type="date"
            value={this.state.birthdate}
            onChange={this.handleDateChange}
          />
          <button onClick={this.calculateAge}>Calculate Age</button>
          {this.state.age !== null && (
            <p>Your age is: {this.state.age} years</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
