import React, { Component} from 'react'

export default class ShowForm extends Component {

  addShow(event) {
    event.preventDefault()
      var show = this.refs.showInput.value.trim()
      var season = Number(this.refs.seasonInput.value.trim())
      var episode = Number(this.refs.episodeInput.value.trim())

      Meteor.call('addShow', show, season, episode)
  }

  render() {
    return (
      <div>
        <form className='form-inline' onSubmit={this.addShow.bind(this)}>
          <input className='flex-item' type='text' ref='showInput' placeholder='Show'/>
          <input className='flex-item' type='number' ref='seasonInput' placeholder='Season'/>
          <input className='flex-item' type='number' ref='episodeInput' placeholder='Episode'/>
          <button className='btn btn-default' type="submit" value="Add Show">Add</button>
        </form>
      </div>
    )
  }
}
