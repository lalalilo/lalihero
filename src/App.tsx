import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./Home";
import { StoryIntroduction } from "./StoryIntroduction";
import story from "./story.json";
import { EndPage } from "./EndPage";
import backgroundImage from "./images/herisson-1.png";

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
            <EndPage
              {...props}
              text="le herison e mor"
              image={backgroundImage}
            />
          )}
        />
        <Route
          path="/happy-ending"
          render={props => (
            <EndPage {...props} text="le herison e vivan" image="bla" />
          )}
        />

        <Route component={HomePage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
