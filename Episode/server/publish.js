Shows = new Mongo.Collection('shows')

Meteor.publish('allShows', function(){
  return Shows.find()
})

Meteor.publish('userShows', function(){
  return Shows.find({user: this.userId})
})
