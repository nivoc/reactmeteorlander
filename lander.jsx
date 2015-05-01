/**
 * This directive is necessary to enable preprocessing of JSX tags:
 * @jsx React.DOM
 */
var cx = React.addons.classSet;
Players = new Meteor.Collection("players");

var MyComponent = ReactMeteor.createClass({
  templateName: "hello2",

  startMeteorSubscriptions: function() {
    Meteor.subscribe("players");
  },

  // Make sure your component implements this method.
  getMeteorState: function() {
    return {
      playerCount: Players.find().count(),
      playerList: Players.find()
    };
  },

  renderPlayer: function(model) {
    return <p key={model._id}>NEXT: {model.score}</p>
  },

  render: function() {
    var inc = function() {
      Players.insert({
        name: "hohi",
        score: Math.floor(Random.fraction()*10)*5
      });
    }
    return (<div>
        hello {this.state.playerCount} <br />
        <button onClick={inc}>INC</button>
        { this.state.playerList.map(this.renderPlayer) }
      </div>);
  }
});

if (Meteor.isClient) {
  // counter starts at 0

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
