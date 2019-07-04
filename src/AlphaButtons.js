import React, {Component} from 'react';

class AlphaButtons extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
        <button
          key={ltr}
          value={ltr}
          onClick={this.props.handleGuess}
          disabled={this.props.guessed.has(ltr)}
        >
          {ltr}
        </button>
    ))
  )
  }
}

export default AlphaButtons;
