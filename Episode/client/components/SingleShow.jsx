import React, {Component} from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react'

export default class SingleShow extends TrackerReact(Component) {

  countUp() {
    Meteor.call('countUp', this.props.show)
  }

  countDown() {
    Meteor.call('countDown', this.props.show)
  }

  seasonUp() {
    Meteor.call('seasonUp', this.props.show)
  }

  seasonDown() {
    Meteor.call('seasonDown', this.props.show)
  }

  deleteShow() {
    Meteor.call('deleteShow', this.props.show)
  }

  render() {
    return (
      <div>
        <div className='showBox'>
          <li>
              <div className='episodeButtons'>
                <button onClick={this.countUp.bind(this)}>UP</button>
                <button onClick={this.countDown.bind(this)}>DOWN</button>
              </div>
              <div className='seasonButtons'>
                <button onClick={this.seasonUp.bind(this)}>UP</button>
                <button onClick={this.seasonDown.bind(this)}>DOWN</button>
              </div>
            <p>{this.props.show.show}</p>
            <p>Season {this.props.show.season}</p>
            <p>Episode {this.props.show.episode}</p>
            <button className='delete' onClick={this.deleteShow.bind(this)}>
              &times;
            </button>
          </li>
      </div>
    </div>
    )
  }
}
