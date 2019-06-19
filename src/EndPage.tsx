import React from "react";
import styled from "styled-components";
import { NoStyleButton } from "./Button";
import { Page } from "./Layout";
import { RouteComponentProps } from "react-router";

interface EndPageProps extends RouteComponentProps {
  text: string;
  image: any;
}

export const EndPage: React.FC<EndPageProps> = props => {
  return (
    <Page>
      <img src={props.image} />
      <Content>{props.text}</Content>

      <Button onClick={() => props.history.push("/introduction")}>
        Recommencer
      </Button>
    </Page>
  );
};

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
