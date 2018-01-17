import React, {Component} from 'react';

class Tile extends Component {

  render (){
    return (
      <div id="tile">
        {this.props.tile}
      </div>
    )
  }


}

export default Tile;
