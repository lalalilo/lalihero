import React from "react";
import styled from "styled-components";

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
  background: papayawhip;
  padding: 4em;
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
