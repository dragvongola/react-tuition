import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import {
  Container as ContainerBase,
  ContentWithPaddingXl,
} from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";

const Container = tw(ContainerBase)`my-8 lg:my-10 bg-gray-900 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-orange-500 text-center`;
const Description = tw(
  SectionDescription
)`text-orange-500 text-center mx-auto max-w-screen-md`;

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`;
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`;
const StatKey = tw.div`text-xl font-medium text-orange-500`;
const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white`;

export default ({
  stats = [
    {
      key: "Clients & Counting",
      value: "5679",
    },
    {
      key: "Professional Tutors",
      value: "23769",
    },
    {
      key: "Satisfaction",
      value: "100%",
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <StatsContainer>
          {stats.map((stat, index) => (
            <Stat key={index}>
              <StatValue>{stat.value}</StatValue>
              <StatKey>{stat.key}</StatKey>
            </Stat>
          ))}
        </StatsContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
