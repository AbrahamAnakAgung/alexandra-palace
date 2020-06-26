import * as React from "react";
import { StyledLink } from "../StyledLink/StyledLink";
import styled from "styled-components";
import { TEXT_SIZE } from "../../constants";

const socialMedia = [
  { text: "🤦‍♂", href: "https://facebook.com/padunk" },
  { text: "🐙", href: "https://github.com/padunk" },
  { text: "🐦", href: "https://twitter.com/anakagungcorp" },
];

function SocialBar() {
  return (
    <Wrapper>
      {socialMedia.map((socmed) => (
        <a
          href={socmed.href}
          target='_blank'
          rel='noopener noreferrer'
          key={socmed.text}>
          {socmed.text}
        </a>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  height: 5rem;
  justify-content: space-around;
  font-size: ${TEXT_SIZE.normal};
`;

export { SocialBar };
