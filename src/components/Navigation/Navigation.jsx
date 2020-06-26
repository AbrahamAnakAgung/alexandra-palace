import * as React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { COLORS, TEXT_SIZE, FONT_WEIGHT } from "../../constants";
import { StyledLink } from "../StyledLink/StyledLink";
import { Spacer } from "../Spacer/Spacer";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { SocialBar } from "../SocialBar/SocialBar";

function Navigation() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const handleClick = () => setToggleMenu((prevState) => !prevState);

  return (
    <NavWrapper>
      <NavBar>
        <NavLogoGroup>
          <NavHamburger>
            <Button width={"5rem"} onClick={handleClick}>
              <HamburgerLine className={toggleMenu && "close"}></HamburgerLine>
            </Button>
          </NavHamburger>
          <NavLogoWrapper>
            <ImgWrapper>
              <StyledLink to='/home' bg='true'>
                <img
                  alt='Alexandra Palace Logo'
                  src='/assets/images/logo.jpg'
                />
              </StyledLink>
            </ImgWrapper>
          </NavLogoWrapper>
        </NavLogoGroup>
        <NavBookGroup>
          <ButtonLink lgwidth={"175px"} to='/book'>
            <BookText>BOOK</BookText>
            <BookText className='show-now'> NOW</BookText>
          </ButtonLink>
        </NavBookGroup>
      </NavBar>

      <NavMenuGroup className={toggleMenu ? "show" : "hidden"}>
        <NavMenuWrapper>
          <NavListsWrapper>
            <NavListGroup>
              <NavList textSize={"large"}>
                <Spacer size={"2rem"} />
                <StyledLink to='/rooms'>rooms</StyledLink>
                <Spacer size={"2rem"} />
              </NavList>
              <NavList textSize={"large"}>
                <StyledLink to='/food-and-drink'>food & drink</StyledLink>
                <Spacer size={"2rem"} />
              </NavList>
              <NavList textSize={"large"}>
                <StyledLink to='/events'>events</StyledLink>
                <Spacer size={"2rem"} />
              </NavList>
              <NavList textSize={"large"}>
                <StyledLink to='/weddings'>weddings</StyledLink>
                <Spacer size={"2rem"} />
              </NavList>
            </NavListGroup>
          </NavListsWrapper>
          <Spacer size={"3rem"} />
          <NavListsWrapper>
            <NavListGroup>
              <NavList textSize={"small"}>
                <StyledLink to='/offers'>
                  <Text family='arial' weight='semiBold'>
                    offers
                  </Text>
                </StyledLink>
                <Spacer size={"1rem"} />
              </NavList>
              <NavList textSize={"small"}>
                <StyledLink to='/careers'>
                  <Text family='arial' weight='semiBold'>
                    careers
                  </Text>
                </StyledLink>
                <Spacer size={"1rem"} />
              </NavList>
              <NavList textSize={"small"}>
                <StyledLink to='/contact'>
                  <Text family='arial' weight='semiBold'>
                    contact us
                  </Text>
                </StyledLink>
                <Spacer size={"1rem"} />
              </NavList>
            </NavListGroup>
          </NavListsWrapper>
          <NavContact>
            <SVGWrapper>
              <svg
                id='nav-phone'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                viewBox='0 0 22 17'>
                <path
                  d='M19.4,3.3c-0.6-0.3-1.2-0.6-1.8-0.8C14,1.4,10.2,1.2,6.5,2c-1.4,0.3-2.7,0.8-4,1.4c-1,0.5-1.2,1.9-0.8,3
                        c0.4,1,1.2,1,2.1,0.9c0.6-0.1,1.2-0.1,1.8-0.2c1-0.2,1.5-0.8,1.3-1.8C6.7,4.8,6.7,4.4,6.6,3.9c2.4-0.8,6.8-0.8,8.7,0
                        c-0.1,0.7-0.3,1.5-0.1,2.1c0.5,1.4,1.9,1,2.9,1.2c0.8,0.1,1.6,0.2,2.1-0.7C20.8,5.6,20.4,3.9,19.4,3.3z M4,4.2
                        C3.3,4.5,2.8,5,2.9,5.8c0,0.1-0.2,0.3-0.3,0.4c0,0-0.3-0.2-0.3-0.2c0.1-0.6,0-1.2,0.3-1.7c0.3-0.5,0.9-1,1.9-0.7
                        C4.3,3.9,4.2,4.1,4,4.2z M11,8.9c-1,0-1.9,0.8-1.9,1.9c0,1,0.8,1.9,1.9,1.9c1,0,1.9-0.9,1.9-1.9C12.8,9.8,12,8.9,11,8.9z M14.8,7.3
                        c-0.7-0.4-1.1-0.8-1.2-1.6c-0.1-0.6-0.4-0.7-1-0.7c-1.1,0-2.2,0-3.3,0c-0.6,0-1,0.2-1,0.8C8.2,6.5,7.8,6.9,7.2,7.3
                        c-2.3,1.4-3.6,3.6-4,6.3c-0.2,1.3,0.4,1.9,1.6,1.9c2,0,4.1,0,6.1,0v0c2,0,4,0,5.9,0c1.6,0,2.1-0.6,1.8-2.2
                        C18.3,10.8,17,8.7,14.8,7.3z M14,11.1c-0.2,1.6-1.5,2.7-3.1,2.7c-1.7,0-3.1-1.4-3.1-3.2c0-1.3,1-2.5,2.2-2.8
                        c0.3-0.1,0.6-0.1,0.9-0.1c1.7,0,3.1,1.4,3,3.1C14,10.9,14,11,14,11.1z'></path>
              </svg>
            </SVGWrapper>
            <Text textSize={"normalSmall"} family='arial'>
              123.456.7890
            </Text>
          </NavContact>
          <Spacer size='5rem' />
          <SocialBar></SocialBar>
        </NavMenuWrapper>
      </NavMenuGroup>
    </NavWrapper>
  );
}

const Text = styled.span`
  font-family: ${(props) =>
    props.family === "arial" ? "Arial, sans-serif" : '"EB Garamond", serif;'};
  font-size: ${(props) => TEXT_SIZE[props.textSize] || "inherit"};
  font-weight: ${(props) => FONT_WEIGHT[props.weight] || 400};
`;

const SVGWrapper = styled.span`
  margin-right: 1rem;
`;

const NavContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
`;

const NavList = styled.li`
  font-size: ${(props) => TEXT_SIZE[props.textSize]};
  text-transform: uppercase;
`;

const NavListGroup = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const NavListsWrapper = styled.div`
  width: 100%;
`;

const NavMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  padding-top: 2rem;
  width: 100%;
`;

const NavMenuGroup = styled.div`
  display: fixed;
  z-index: 990;
  top: 0;
  left: 0;
  background: url("/assets/images/eggshell1.jpg") repeat;
  height: calc(100vh - 2rem);
  transform: translateY(-100%);
  opacity: 0;
  transition: transform 500ms, opacity 300ms;

  &::before {
    content: "";
    position: absolute;
    border: 1px solid crimson;
    width: 100%;
    height: 1rem;
  }

  &.show {
    transform: translateY(0);
    opacity: 1;
  }
`;

const BookText = styled.span`
  display: block;
  text-transform: uppercase;
`;

const NavBookGroup = styled.div``;

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.whitePrimary};
`;

const NavLogoWrapper = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const HamburgerLine = styled.span`
  width: 60%;
  height: 1px;
  background: ${COLORS.whitePure};
  opacity: 1;
  transition: background 500ms;

  &.close {
    background: 0 0;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${COLORS.whitePure};
    transition: top 300ms, transform 300ms ease-out;
  }

  &::before {
    top: -1rem;
  }

  &::after {
    top: 1rem;
  }

  &.close::before {
    top: 0;
    transform: rotate(45deg);
  }

  &.close::after {
    top: 0;
    transform: rotate(-45deg);
  }
`;

const NavHamburger = styled.div``;

const NavLogoGroup = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
`;

const NavBar = styled.nav`
  position: fixed;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  z-index: 999;
  width: calc(100% - 2rem);
`;

const NavWrapper = styled.div`
  width: 100%;
`;

export { Navigation };
