import React, { useEffect } from "react";
import styled from "styled-components";
import { Page } from "./Layout";
import { Page1 } from "./story/page1";

export const StoryPage: React.FC<any> = ({ page, history }: any) => {
  useEffect(() => {
    if (!page.choices) {
      return;
    }
    for (const choice of page.choices) {
      const element = document.querySelector(choice.element);
      if (element) {
        element.addEventListener("click", () =>
          history.push(`/page/${choice.pageLink}`)
        );
      }
    }
  });
  return (
    <Page>
      <Page1 />
      <Content>
        {page.content.replace(
          "{studentName}",
          window.localStorage.getItem("studentName") || "Léon"
        )}
      </Content>
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
