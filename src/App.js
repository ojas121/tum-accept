import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleTable from './GradesTable.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreNoExtra: 0,
      bonus: 0,
    };
  }

  changeBaseScore = () => {};
  changeBonus = () => {};

  render() {
    return (
      <div className="App">
        <SimpleTable/>
      </div>
    );
  }
}

export default App;
