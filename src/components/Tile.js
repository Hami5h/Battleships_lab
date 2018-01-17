import React, {Component} from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hit: "tile"
    }
    this.tileClicked = this.tileClicked.bind(this);
  }

  tileClicked(event) {
    console.log('tile clicked');
    // if this.tile.innerText = "S" {
    //   console.log("hit ship");
    if (this.props.tile === 'S') {
      console.log('explosion');
      console.log(this.props);
      this.setState({
        hit: "smashed"
      })
    } else {
      this.setState({
        hit: "missed"
      })
    }
  }


  render (){
    return (
      <div id={this.state.hit} onClick={this.tileClicked}>
        {this.props.index}
      </div>
    )
  }


}

export default Tile;
