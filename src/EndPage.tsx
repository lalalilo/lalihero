import React from "react";
import styled from "styled-components";
import { NoStyleButton } from "./Button";
import { Page } from "./Layout";

interface EndPageProps {
  text: string;
  image: string;
}

export const EndPage: React.FC<EndPageProps> = props => {
  return (
    <Page>
      <ContentWrapper>
        <Content>{props.text}</Content>
      </ContentWrapper>
      <Wrapper>
        <Button onClick={() => null}>Recommencer</Button>
      </Wrapper>
    </Page>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Button = styled(NoStyleButton)`
  margin: 20px;
  box-shadow: 0 2px 20px 0 rgba(98, 98, 98, 0.2);
  border-radius: 5px;
  overflow: hidden;
  font-family: inherit;
  width: 100px;
  height: 40px;
  white-space: nowrap;
  color: white;
  background-color: #78a5f0;
  &:disabled {
    background-color: #d7e2e9;
  }
`;
