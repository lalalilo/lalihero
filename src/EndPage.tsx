import React from "react";
import styled from "styled-components";
import { NoStyleButton } from "./Button";
import { Page } from "./Layout";
import { RouteComponentProps } from "react-router";

interface EndPageProps extends RouteComponentProps {
  text: string;
  image: string;
}

export const EndPage: React.FC<EndPageProps> = props => {
  return (
    <Page>
      <EndImage src={props.image} />
      <Content>{props.text}</Content>
      <Button onClick={() => props.history.push("/introduction")}>
        Recommencer
      </Button>
    </Page>
  );
};

const Content = styled.text`
  font-size: 30px;

  background: white;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EndImage = styled.img`
  margin-top: 20px;
  width: 20%;
`;

const Button = styled(NoStyleButton)`
  font-size: 30px;
  padding: 10px 20px;
  margin: 20px;
  box-shadow: 0 2px 20px 0 rgba(98, 98, 98, 0.2);
  border-radius: 5px;
  overflow: hidden;
  font-family: inherit;
  white-space: nowrap;
  color: white;
  background-color: #78a5f0;
  &:disabled {
    background-color: #d7e2e9;
  }
`;
