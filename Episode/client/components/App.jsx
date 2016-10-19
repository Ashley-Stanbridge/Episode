import React from 'react'
import ReactDOM from 'react-dom'
import Routes from '../Routes.jsx'
import TrackerReact from 'meteor/ultimatejs:tracker-react'

Shows = new Mongo.Collection('shows')


export default class App extends TrackerReact(React.Component) {

  shows() {
    return Shows.find().fetch()
  }

  addShow(event) {
    event.preventDefault()
      var show = this.refs.showInput.value.trim()
      var season = this.refs.seasonInput.value.trim()
      var episode = this.refs.episodeInput.value.trim()

      Shows.insert({
        show: show,
        season: season,
        episode: episode
      })
  }

  render() {
    console.log(this.shows())
    return(
      <div>
        <h1>Show List</h1>
        <form className='new-show' onSubmit={this.addShow.bind(this)}>

          <input
            type='text'
            ref='showInput' />

            <input
              type='text'
              ref='seasonInput' />

            <input
                type='text'
                ref='episodeInput' />

              <input type="submit" value="Add Show" />

        </form>
      </div>
    )
  }
}
