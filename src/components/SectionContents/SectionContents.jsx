import * as React from "react";
import styled from "styled-components";
import { COLORS, TEXT_SIZE, FONT_WEIGHT } from "../../constants";
import { StyledLink } from "../StyledLink/StyledLink";
import { Button } from "../Button/Button";
import { Spacer } from "../Spacer/Spacer";

const homeContents = [
  {
    time: "7.30am",
    title: "Rise & Sunshine",
    titleText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/images/01_title.jpg",
    themeColor: "secondaryColor",
    articles: [
      {
        time: "9:02am",
        text:
          "Pellentesque pulvinar pellentesque habitant morbi tristique senectus et.",
        buttonText: "discover rooms",
        image: "/assets/images/01_breakfast.jpg",
        themeColor: "orangeDark",
      },
      {
        time: "11:24am",
        text:
          "Ligula ullamcorper malesuada proin libero. Arcu cursus vitae congue mauris rhoncus aenean.",
        buttonText: "explore juno's",
        image: "/assets/images/01_breakfast-02.jpg",
        themeColor: "orangeLight",
      },
      {
        time: "12:34am",
        text:
          "Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. At in tellus integer feugiat scelerisque.",
        buttonText: "garden of eden",
        image: "/assets/images/01_garden.jpg",
        themeColor: "green",
      },
    ],
  },
  {
    time: "1pm",
    title: "Play & Pamper",
    titleText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/images/02_title.jpg",
    themeColor: "chocolateLight",
    articles: [
      {
        time: "2:16pm",
        text:
          "Pellentesque pulvinar pellentesque habitant morbi tristique senectus et.",
        buttonText: "dive into pools",
        image: "/assets/images/02_pool.jpg",
        themeColor: "greenYellow",
      },
      {
        time: "3:29pm",
        text:
          "Ligula ullamcorper malesuada proin libero. Arcu cursus vitae congue mauris rhoncus aenean.",
        buttonText: "quench at lemonade stand",
        image: "/assets/images/02_lemonade.jpg",
        themeColor: "beige",
      },
      {
        time: "4:43pm",
        text:
          "Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. At in tellus integer feugiat scelerisque.",
        buttonText: "relax at psyc",
        image: "/assets/images/02_relax.jpg",
        themeColor: "blueSky",
      },
    ],
  },
  {
    time: "5pm",
    title: "Drinks & Dining",
    titleText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/images/03_title.jpg",
    themeColor: "chocolateDark",
    articles: [
      {
        time: "6:18pm",
        text:
          "Pellentesque pulvinar pellentesque habitant morbi tristique senectus et.",
        buttonText: "enjoy counter reformation",
        image: "/assets/images/03_bar.jpg",
        themeColor: "salmon",
      },
      {
        time: "7:33pm",
        text:
          "Ligula ullamcorper malesuada proin libero. Arcu cursus vitae congue mauris rhoncus aenean.",
        buttonText: "indulge at the cleopatra",
        image: "/assets/images/03_dinner.jpg",
        themeColor: "greenDark",
      },
      {
        time: "9:51pm",
        text:
          "Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. At in tellus integer feugiat scelerisque.",
        buttonText: "imbibe at the mini bar",
        image: "/assets/images/03_firecamp.jpg",
        themeColor: "blue",
      },
    ],
  },
];

function SectionContents() {
  return (
    <div style={{ padding: "5rem 0 1rem" }}>
      {homeContents.map((content) => {
        return (
          <section key={content.time}>
            <FlexContainer>
              <ImgWrapper>
                <StyledImage src={content.image} alt='Alexandra Palace Hotel' />
              </ImgWrapper>
              <TextCardWrapper bg={content.themeColor}>
                <TextCard>
                  <TextCardTime>{content.time}</TextCardTime>
                  <TextCardTitle>{content.title}</TextCardTitle>
                  <TextCardContent>{content.titleText}</TextCardContent>
                </TextCard>
              </TextCardWrapper>
            </FlexContainer>
            <Spacer size='5rem' inline='false' />
            {content.articles.map((article) => {
              return (
                <div key={article.time}>
                  <ImgWrapper>
                    <StyledImage
                      src={article.image}
                      alt='Alexandra Palace Hotel'
                    />
                  </ImgWrapper>
                  <ArticleWrapper>
                    <ArticleTimeWrapper>
                      <ArticleTime>{article.time}</ArticleTime>
                      <Line></Line>
                    </ArticleTimeWrapper>
                    <ArticleText>{article.text}</ArticleText>
                    <Spacer size='2rem' inline='false' />
                    {article.buttonText && (
                      <Button
                        width='20rem'
                        borderColor={article.themeColor}
                        bg='true'
                        textColor='true'
                        padding='8px 14px'>
                        {article.buttonText}
                      </Button>
                    )}
                  </ArticleWrapper>
                  <Spacer size='7rem' inline='false' />
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}

const ArticleText = styled.p`
  color: ${COLORS.grayPrimary};
  font-size: ${TEXT_SIZE.large};
`;

const Line = styled.span`
  display: inline-block;
  background: ${COLORS.blackPure};
  height: 2px;
  width: 100%;
  margin-left: 1rem;
`;

const ArticleTime = styled.span`
  font-size: ${TEXT_SIZE.normalSmall};
  font-weight: ${FONT_WEIGHT.semiBold};
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
`;

const ArticleTimeWrapper = styled.p`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ArticleWrapper = styled.div`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Image = (props) => <img {...props} />;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const TextCardTime = styled.h3`
  color: ${COLORS.whitePrimary};
`;

const TextCardTitle = styled.h2`
  color: ${COLORS.whitePure};

  @media (min-width: 640px) {
    font-size: ${TEXT_SIZE.xxl};
  }
`;

const TextCardContent = styled.p`
  color: ${COLORS.grayTextAlpha};
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${TEXT_SIZE.normalSmall};

  &::first-letter {
    padding-left: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    width: 2px;
    height: 5rem;
    background: ${COLORS.orangeLight};
  }

  @media (min-width: 640px) {
    margin-top: 2rem;
  }
`;

const TextCard = styled.div`
  font-size: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 40rem;
  margin: 0 auto;
`;

const TextCardWrapper = styled.div`
  color: ${COLORS.whitePure};
  background: ${(props) => COLORS[props.bg]};
  width: 80%;
  margin: 0 auto;
  margin-top: -8rem;
  padding: 2rem;

  @media (min-width: 640px) {
    margin-top: -6rem;
  }

  @media (min-width: 768px) {
    margin-left: -15%;
    height: 50%;
    order: 1;
  }
`;

const FlexContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export { SectionContents };
