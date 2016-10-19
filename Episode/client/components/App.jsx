import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return(
      <div>
        HELLO!
      </div>
    )
  }
}

Meteor.startup(function() {
  ReactDOM.render(<App />, document.getElementById('render-target'))
})
