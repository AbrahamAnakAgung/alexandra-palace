import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants";

function ButtonLink(props) {
  return <CustomLink {...props}>{props.children}</CustomLink>;
}

const CustomLink = styled(Link)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 100%;
  background: ${(props) => (props.bg ? COLORS.transparent : COLORS.blackPure)};
  color: ${(props) =>
    props.textColor ? COLORS.grayPrimary : COLORS.whitePure};

  @media (min-width: 768px) {
    width: ${(props) =>
      props.lgwidth ? props.lgwidth : props.width || "100%"};
  }
`;

export { ButtonLink };
