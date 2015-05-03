/**
 * This directive is necessary to enable preprocessing of JSX tags:
 */
MyComponent = ReactMeteor.createClass({
  startMeteorSubscriptions: function() {
    Meteor.subscribe("players");
  },

  getInitialState: function() {
    return {
      playerCount: 0,
      playerList: []
   }
  },
  // Make sure your component implements this method.
  getMeteorState: function() {
    var fil = this.state.filterValue;
    return {
      playerCount: Players.find().count(),
      // playerList: Players.find(
      //     )
    };
  },

  renderPlayer: function(model) {
    return (<span key={model._id}>{model.score}</span>);
  },

  handleFilterChange: function(event) {
    this.setState({filterValue: event.target.value});
    this.setState({playerList: Players.find(
              { score:  parseInt(event.target.value)}
          )});

  },
  render: function() {
    var inc = function() {
      Players.insert({
        name: "hohi",
        score: Math.floor(Random.fraction()*10)*5
      });
    }
    return (
      <div>
        Filter <input type="text" onChange={this.handleFilterChange} />
        <br />        Current Filter Value is {this.state.filterValue} <br />
        hello {this.state.playerCount} <br />
        <br />
        <button onClick={inc}>NEW</button>

        { this.state.playerList.map(this.renderPlayer) }
        <br />
        <br />
        <br />
        <a href="#/">go back home</a>
      </div>);
  }
});
