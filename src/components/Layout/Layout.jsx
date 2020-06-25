import * as React from "react";
import styled from "styled-components";
import { Navigation } from "../Navigation/Navigation";

function Layout(props) {
  return (
    <StyledLayout>
      <div>
        <a href='#main' hidden></a>
        <Navigation />
      </div>
      {props.children}
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  position: relative;
`;

export { Layout };
