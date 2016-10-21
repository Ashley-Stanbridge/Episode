import React from 'react'
import ReactDOM from 'react-dom'
import Routes from '../Routes.jsx'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import ShowForm from './ShowForm'
import SingleShow from './SingleShow'
import AccountsUI from './AccountsUI'

Shows = new Mongo.Collection('shows')


export default class App extends TrackerReact(React.Component) {
  constructor() {
    super()

    this.state = {
      subscription: {
        Shows: Meteor.subscribe('userShows')
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.shows.stop()
  }

  shows() {
    return Shows.find().fetch()
  }

  render() {
    return(
      <div className='container-fluid' id='appbox'>
        <div className='row'>
          <div className='col-md-10'>
            <h1>Episode Tracker</h1>
          </div>
          <div className='col-md-2'>
            <AccountsUI className='login'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ShowForm />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            {this.shows().map((show)=> {
              return <SingleShow show={show} season={show} key={show._id} />
            })}
          </div>
        </div>
      </div>
    )
  }
}
