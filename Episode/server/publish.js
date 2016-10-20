Shows = new Mongo.Collection('shows')

Meteor.publish('allShows', function(){
  return Shows.find()
})
