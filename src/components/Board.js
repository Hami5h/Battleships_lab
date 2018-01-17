import React, {Component} from 'react';
import Tile from './Tile.js'

class Board extends Component {
  constructor(props){
    super(props);
  }

render() {
  const position = this.props.positions.map(row => {
    return row.map(tile => {
      return <Tile tile={tile}/>

    })
  })
  return (
    <div>
      {position}
    </div>
  )
}

}

export default Board;
