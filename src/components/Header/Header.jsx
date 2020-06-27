import * as React from "react";
import styled, { keyframes } from "styled-components";
import { COLORS } from "../../constants";

function Header() {
  return (
    <HeroWrapper>
      <VideoWrapper>
        <StyledVideo loop muted preload='auto' autoPlay={true}>
          <source src='/assets/videos/header.mp4' type='video/mp4' />
        </StyledVideo>
      </VideoWrapper>
      <HeroTitleWrapper>
        <div>
          <h2>
            <span>The day I awoke & started </span>
            <span style={{ fontStyle: "italic" }}>dreaming</span>
          </h2>
        </div>
      </HeroTitleWrapper>
    </HeroWrapper>
  );
}

const HeroTitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${COLORS.whitePure};
  font-size: 2.4rem;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Video = (props) => <video {...props}>{props.children}</video>;

const StyledVideo = styled(Video)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
`;

export { Header };
