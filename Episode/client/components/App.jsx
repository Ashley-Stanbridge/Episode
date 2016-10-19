import React from 'react'
import ReactDOM from 'react-dom'
import Routes from '../Routes.jsx'

Shows = new Mongo.Collection('shows')


export default class App extends React.Component {

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
      // console.log(item)
  }

  render() {
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

            <input type="submit" value="Submit my form" />

        </form>
      </div>
    )
  }
}
