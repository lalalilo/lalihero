import React from "react";
import styled from "styled-components";
import BackgroundImage from "./images/herisson-1.png";

interface StoryIntroductionProps {
  text: string;
}

export const StoryIntroduction: React.FC<StoryIntroductionProps> = props => {
  return (
    <div>
      <Background src={BackgroundImage} />
      <Wrapper>
        <Content>{props.text}</Content>
      </Wrapper>
    </div>
  );
};

const Background = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`;

const Content = styled.text`
  position: absolute;
  bottom: 0;
  background: white;
  padding: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
