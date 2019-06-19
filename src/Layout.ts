import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Content = styled.div`
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