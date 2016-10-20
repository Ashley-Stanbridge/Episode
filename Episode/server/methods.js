Meteor.methods({
  addShow(addedshow, addedseason, addedepisode){
    Shows.insert({
      show: addedshow,
      season: addedseason,
      episode: addedepisode
    })
  }
})
