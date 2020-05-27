import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import DesignIllustration from "../../images/undraw_fill_forms_yltj.svg";
import DesignIllustration1 from "../../images/undraw_people_search_wctu.svg";
import DesignIllustration2 from "../../images/undraw_verified_tw20.svg";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image:url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-contain bg-no-repeat bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-orange-500`;
const Description = tw.p`mt-2 text-lg leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;
const PrimaryAction = tw.button`m-auto block rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-teal-500 text-gray-100 hocus:bg-teal-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;
const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc: DesignIllustration,
      subtitle: "1.",
      title: "Fill Up The Form",
      description:
        "Take 1-2 minutes to provide us with the information required for the home tuition lessons.",
    },

    {
      imageSrc: DesignIllustration1,
      subtitle: "2.",
      title: "We’ll Find You A Tutor in Less Than 24 Hours",
      description:
        "Our dedicated staff will begin to contact the most suitable home tutors based on  your requests, and send you a comprehensive list of tutor profiles within 24 hours.",
    },

    {
      imageSrc: DesignIllustration2,
      subtitle: "3.",
      title: "Confirmation",
      description:
        "After you have made your tutor selection based on the list of tutor profiles provided, we will proceed to confirm the tuition arrangements for you.",
    },
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>3 Easy Steps To Find A Tutor</HeadingTitle>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
              </Details>
            </Card>
          ))}
        </Content>
        <a href="/Contact">
          <PrimaryAction>Contact Us</PrimaryAction>
        </a>
      </SingleColumn>
    </Container>
  );
};
