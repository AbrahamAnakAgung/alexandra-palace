import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants";

function StyledLink(props) {
  return <CustomLink {...props}>{props.children}</CustomLink>;
}

const CustomLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 100%;
  color: ${COLORS.grayPrimary};
  font-weight: 600;
`;

export { StyledLink };
