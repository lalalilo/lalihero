import React, { useState } from "react";
import styled from "styled-components";
import { NoStyleButton } from "./Button";
import { RouteComponentProps } from "react-router";
import { Page } from "./Layout";

export function HomePage(props: RouteComponentProps) {
  const [value, setValue] = useState("");

  return (
    <Page>
      <Title>Entre ton nom</Title>
      <SubmitWrapper>
        <Input value={value} onChange={event => setValue(event.target.value)} />
        <Submit
          onClick={() => {
            window.localStorage.setItem("studentName", value);
            props.history.push("/introduction");
          }}
        >
          C'EST PARTI !
        </Submit>
      </SubmitWrapper>
    </Page>
  );
}

const SubmitWrapper = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  margin: 20px;
  box-shadow: 0 2px 20px 0 rgba(98, 98, 98, 0.2);
  border-radius: 5px;
  overflow: hidden;
`;

const Title = styled.h2`
  color: #82b2ff;
  font-size: 50px;
`;

const Input = styled.input`
  font-family: inherit;
  flex-grow: 1;
  font-size: 16px;
  opacity: 0.8;
  border: none;
  outline: none;
  padding: 5px 10px;
  &::placeholder {
    text-align: center;
  }
`;

const Submit = styled(NoStyleButton)`
  font-family: inherit;
  flex-grow: 1;
  white-space: nowrap;
  color: white;
  background-color: #78a5f0;
  &:disabled {
    background-color: #d7e2e9;
  }
`;
