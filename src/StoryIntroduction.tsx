import React from "react";
import styled from "styled-components";
import backgroundImage from "./story/herisson-1.png";
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

