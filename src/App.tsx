import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./Home";
import { StoryIntroduction } from "./StoryIntroduction";
import story from "./story.json"

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
              text={story.introduction.replace("{studentName}", window.localStorage.getItem("studentName") || "Léon")}
            />
          )}
        />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
