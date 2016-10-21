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
      <div className='container' id="showbox">
        <div className='row'>
          <div className='col-md-2'>
            <h3>Show</h3>
            <p>{this.props.show.show}</p>
          </div>
          <div className='col-md-2'>
            <h3>Season</h3>
            <p>Season {this.props.show.season}</p>
          </div>
          <div className='col-md-2'>
            <h3>Episode</h3>
            <p>Episode {this.props.show.episode}</p>
          </div>
          <div className='col-md-1'>
            <button className='btn btn-default' onClick={this.seasonUp.bind(this)}><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
            <button className='btn btn-default' onClick={this.seasonDown.bind(this)}><i className="fa fa-arrow-down" aria-hidden="true"></i></button>
          </div>
          <div className='col-md-1'>
            <button className='btn btn-default' id='rightbutton'onClick={this.countUp.bind(this)}><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
            <button  className='btn btn-default' onClick={this.countDown.bind(this)}><i className="fa fa-arrow-down" aria-hidden="true"></i></button>
          </div>
          </div>
      </div>

    )
  }
}




  // <button className='btn btn-default' onClick={this.deleteShow.bind(this)}>&times;</button>
