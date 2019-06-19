import React from "react";
import { Page, Content } from "./Layout";

interface StoryIntroductionProps {
  text: string;
}

export const StoryIntroduction: React.FC<StoryIntroductionProps> = props => {
  return (
    <Page>
      <Content>{props.text}</Content>
    </Page>
  );
};

