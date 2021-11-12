import React from "react";

export const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/daily" component={DailyTop} />
            <Route exact path="/daily/:id" component={DailyDetail} />
            <Route exact path="/daily/category/:cat" component={CategoryView} />
            <Route path="/profile" component={Profile} />
            <Route render={() => <h4>not found...</h4>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
