import './App.css';
import { Component } from 'react';
import { Score } from './componnent/Score';
import { Solution } from './componnent/Solution';
import { Letters } from './componnent/Letters';


export class App extends Component {
  constructor(){
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {word: "matan",
                 hint: "It from Nahum family gang"},
      score: 100
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  render(){
    return (
      <div>
        <Score score={this.state.score} />
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />
        <Letters letterStatus={this.state.letterStatus} />
      </div>
    );
  }
}

export default App;
