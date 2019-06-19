import React from "react";
import styled from "styled-components";
import { Page } from "./Layout";
import { Page1 } from "./story/page1";

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

const Content = styled.div`
  padding: 1em;
  position: absolute;
  bottom: 1em;
  width: 90%;
  color: #a1aab7;
  background-color: #fff;
  font-size: 30px;
  border-radius: 5px;
`;
