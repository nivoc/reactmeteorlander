var {
  Route,
  DefaultRoute,
  NotFoundRoute,
} = ReactRouter;

routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} />

    <Route name="first" path="first" handler={MyComponent}/>
  </Route>
);

