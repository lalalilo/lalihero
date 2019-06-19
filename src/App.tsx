import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./Home";
import { StoryIntroduction } from "./StoryIntroduction";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/introduction"
          render={props => (
            <StoryIntroduction
              {...props}
              text="This is the description of the story. Enjoy. This is the description of the story. Enjoy. This is the description of the story. Enjoy."
            />
          )}
        />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
