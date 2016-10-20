Meteor.methods({
  addShow(addedshow, addedseason, addedepisode){
    if(!Meteor.userId()) {
      throw new Meteor.Error('not-authorized')
    }
    Shows.insert({
      show: addedshow,
      season: addedseason,
      episode: addedepisode,
      user: Meteor.userId()
    })
  },
  countUp(show){
    if(Meteor.userId() !== show.user) {
      throw new Meteor.Error('not-authorized')
    }
    Shows.update(show._id, {
      $set: {episode: show.episode + 1}
    })
  },
  countDown(show){
    if(Meteor.userId() !== show.user) {
      throw new Meteor.Error('not-authorized')
    }
    Shows.update(show._id, {
      $set: {episode: show.episode - 1}
    })
  },
  seasonUp(show){
    if(Meteor.userId() !== show.user) {
      throw new Meteor.Error('not-authorized')
    }
    Shows.update(show._id, {
      $set: {season: show.season + 1}
    })
  },
  seasonDown(show){
    if(Meteor.userId() !== show.user) {
      throw new Meteor.Error('not-authorized')
    }
    Shows.update(show._id, {
      $set: {season: show.season - 1}
    })
  },
  deleteShow(show){
    if(Meteor.userId() !== show.user) {
      throw new Meteor.Error('not-authorized')
    }
    Shows.remove(show._id)
  }
})
