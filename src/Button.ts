import styled from "styled-components";

export const NoStyleButton = styled.button`
  background: none;
  border: 0;
  color: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0px;
  -webkit-appearance: button; /* for input */
  user-select: none; /* for button */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  font-family: inherit;
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: inherit;
  }
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;