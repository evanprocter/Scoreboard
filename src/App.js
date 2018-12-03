import React, { Component } from 'react';
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
        <div key={score.id}>
          <h2>
            Name: {score.name} // Score: {score.score}
          </h2>
          <button onClick={() => this._incrementScoreById(score.id)}>+</button>
        </div>
      );
    });
    return cards;
  }

  // version 1: .map manually constructing replacement
  // _incrementScoreById(id){
  //   // find the player in this.state.scores
  //   // increment their score
  //   const newScores = this.state.scores.map(score => {
  //     if(score.id !== id){
  //       return score
  //     }else{
  //       return {
  //         id: score.id,
  //         name: score.name,
  //         score: score.score + 1
  //       }
  //     }
  //   })
  //   // and call this.setState
  //   this.setState({
  //     scores: newScores
  //   });
  // }

  // version 2: .map, using a shorthand to copy values out of the original
_incrementScoreById(id){
  // find the player in this.state.scores
  // increment their score
  const newScores = this.state.scores.map(bruce => {
    if(bruce.id !== id){
      return bruce
    }else{
      return {
        ...bruce,
        score: bruce.score + 1
      };
    }
  });

  // and call this.setState
  this.setState({

})
}

}

export default App;
