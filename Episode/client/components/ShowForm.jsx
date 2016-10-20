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
      <form className='new-show' onSubmit={this.addShow.bind(this)}>
        <input type='text' ref='showInput' />
        <input type='number' ref='seasonInput' />
        <input type='number' ref='episodeInput' />
        <input type="submit" value="Add Show" />
      </form>
    )
  }
}
