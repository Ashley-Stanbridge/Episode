import React from 'react'
import ReactDOM from 'react-dom'
import Routes from '../Routes.jsx'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import ShowForm from './ShowForm'
import SingleShow from './SingleShow'

Shows = new Mongo.Collection('shows')


export default class App extends TrackerReact(React.Component) {
  constructor() {
    super()

    this.state = {
      subscription: {
        Shows: Meteor.subscribe('allShows')
      }
    }
  }
  shows() {
    return Shows.find().fetch()
  }

  render() {
    console.log(this.shows())
    return(
      <div>
        <h1>Show List</h1>
        <ShowForm />
        <ul>
          {this.shows().map((show)=> {
            return <SingleShow show={show} season={show} key={show._id} />
          })}
        </ul>
      </div>
    )
  }
}
