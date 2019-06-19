import React from "react";
import styled from "styled-components";
import { Page, Content } from "./Layout"
import {Page1} from "./story/page1"


interface StoryPageProps {
  text: string;
}

export const StoryPage: React.FC<StoryPageProps> = props => {
  return (
    <Page>
      <Page1 />
      <Content>{props.text}</Content>
    </Page>
  );
};


