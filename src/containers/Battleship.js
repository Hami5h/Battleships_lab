import React, {Component} from 'react';
import Board from '../components/Board.js';

class Battleship extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positions: [
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ','S','S',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ','S',' '],
  [' ',' ',' ',' ',' ','S',' ',' ','S',' '],
  [' ',' ',' ',' ',' ','S',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','S',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','S',' ',' ',' ',' '],
  [' ','S','S','S',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ','S','S','S',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  ['S',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   ]
    }
  }

  render() {
    return (
      <div>
        <Board positions={this.state.positions}/>
      </div>
    );
  }


}

export default Battleship;
