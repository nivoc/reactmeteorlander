ReactRouter.run(routes, function (Handler) {
  $(document).ready(function(){
    React.render(<Handler/>, document.body);
  });
});
