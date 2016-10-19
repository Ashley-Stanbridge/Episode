import React, {Component} from 'react'

export default class SingleShow extends Component {
  render() {
    return (
      <li>
        <p>{this.props.show.show}</p>
        <p>Season {this.props.season.season}</p>
        <p>Episode {this.props.show.episode}</p>
      </li>
    )
  }
}
