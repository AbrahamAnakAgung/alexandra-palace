import * as React from "react";

const Spacer = ({ size, inline }) => (
  <span
    style={{
      width: size,
      height: size,
      display: inline ? "inline-block" : "block",
    }}
  />
);

export { Spacer };
