import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./Home";
import { StoryIntroduction } from "./StoryIntroduction";
import story from "./story/index.json";
import { EndPage } from "./EndPage";
import backgroundImage from "./story/herisson-1.png";
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
          component={EndPage}
          text="le herison e mor"
          image={backgroundImage}
        />
        <Route
          path="/happy-ending"
          component={EndPage}
          text="le herison e vivan"
          image="bla"
        />
        <Route
          path="/page"
          component={StoryPage}
          text={story.page.replace(
            "{studentName}",
            window.localStorage.getItem("studentName") || "Léon"
          )}
        />
        <Route path="/ending" exact component={EndPage} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
