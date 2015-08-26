ButtonClicks = new Mongo.Collection('buttonClicks');

if (Meteor.isClient) {
    Template.buttonClickList.helpers({
    'buttonClick': function () {
      return ButtonClicks.find();
    }
  }); 
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
