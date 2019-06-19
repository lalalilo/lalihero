import React from "react";
import styled from "styled-components";
import backgroundImage from "./story/herisson-1.png";
import { Page } from "./Layout";

interface StoryIntroductionProps {
  text: string;
}

export const StoryIntroduction: React.FC<StoryIntroductionProps> = props => {
  return (
    <Wrapper>
      <Content>{props.text}</Content>
    </Wrapper>
  );
};

const Content = styled.div`
  position: absolute;
  bottom: 0;
  background: white;
  font-size: 40px;
  max-width: 80%;
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Page)`
  background-image: url(${backgroundImage});
  background-size: cover;
`;
