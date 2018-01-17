import React, {Component} from 'react';
import Tile from './Tile.js'

class Board extends Component {
  render() {
    const position = this.props.positions.map((row, outerIndex) => {
      return row.map((tile, innerIndex) => {
        return <Tile key={'' + outerIndex + innerIndex} outerIndex={outerIndex} innerIndex={innerIndex} tile={tile}  />
      })
    })
    return (
      <div id="board">
        {position}
      </div>
    )
  }

}

export default Board;
