import * as React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

function Button(props) {
  return <CustomButton {...props}>{props.children}</CustomButton>;
}

const CustomButton = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 100%;
  border-color: ${(props) => props.borderColor};
  background: ${(props) => (props.bg ? COLORS.transparent : COLORS.blackPure)};
  color: ${(props) =>
    props.textColor ? COLORS.whitePrimary : COLORS.whitePure};

  @media (min-width: 768px) {
    width: ${(props) =>
      props.lgWidth ? props.lgWidth : props.width || "100%"};
  }
`;

export { Button };
