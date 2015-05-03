App = React.createClass({
  getInitialState: function () {
    return { };
  },

  render: function () {
    return (
      <div className="App">
        <ul className="Master">
        </ul>
        <div className="Detail">
          <ReactRouter.RouteHandler/>
        </div>
      </div>
    );
  }
});
