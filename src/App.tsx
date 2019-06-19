import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./Home";
import { StoryIntroduction } from "./StoryIntroduction";
import story from "./story/index.json";
import { EndPage } from "./EndPage";
import hedgehog from "./story/hedgehog.svg";
import { StoryPage } from "./StoryPage";

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
              text={story.introduction.replace(
                "{studentName}",
                window.localStorage.getItem("studentName") || "Léon"
              )}
            />
          )}
        />
        <Route
          path="/sad-ending"
          render={props => (
            <EndPage {...props} text="le herison e mor dsl" image={hedgehog} />
          )}
        />
        <Route
          path="/happy-ending"
          render={props => (
            <EndPage {...props} text="le herison e vivan" image={hedgehog} />
          )}
        />

        <Route
          path="/page"
          render={props => <StoryPage {...props} text="le herison e vivan" />}
        />
        <Route path="/ending" exact component={EndPage} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
