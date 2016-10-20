Meteor.methods({
  addShow(addedshow, addedseason, addedepisode){
    Shows.insert({
      show: addedshow,
      season: addedseason,
      episode: addedepisode
    })
  },
  countUp(id, episode){
    Shows.update(id, {
      $set: {episode: episode + 1}
    })
  },
  countDown(id, episode){
    Shows.update(id, {
      $set: {episode: Number(episode - 1)}
    })
  },
  seasonUp(id, season){
    Shows.update(id, {
      $set: {season: season + 1}
    })
  },
  seasonDown(id, season){
    Shows.update(id, {
      $set: {season: Number(season - 1)}
    })
  },
  deleteShow(id){
    Shows.remove(id)
  }
})
