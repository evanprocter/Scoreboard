import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // set up state
    this.state = {
      scores: [
        {id: 1,
        name: "alice",
        score: 1001
      },
      {
        id: 2,
        name: "jeffles",
        score: 20
      },
      { id: 3,
        name: "stinkface",
        score: 500
      }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Scoreboard App</h1>
        {/* this is how you write comments in react */}
        <div className="score-container">
          {this._scoresAsCards()}
        </div>    
      </div>
    );  
  }


  _scoresAsCards(){
    const cards = this.state.scores.map(score => {
      return (
        <div>
          <h2>
            Name: {score.name} // Score: {score.score}</h2>
        </div>
      )
    });
    return cards;
  }
}

export default App;
