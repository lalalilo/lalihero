import React from "react";
import { Page, Content } from "./Layout";
import {Page1} from "./story/page1"

interface StoryIntroductionProps {
  text: string;
}

export const StoryIntroduction: React.FC<StoryIntroductionProps> = props => {
  return (
    <Page>
      <Page1 />
      <Content>{props.text}</Content>
    </Page>
  );
};
