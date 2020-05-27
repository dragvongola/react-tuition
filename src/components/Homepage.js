import React from "react";
import "styles.css";
import "tailwindcss/dist/base.css";
import Hero from "./hero/TwoColumnWithFeaturesAndTestimonial";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Stats from "./features/ThreeColCenteredStatsPrimaryBackground";
import Stepss from "./features/VerticalWithAlternateImageAndText";
import Tetsimonials from "./testimonials/SimplePrimaryBackground";

function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Stepss />
      <Tetsimonials />
    </div>
  );
}

export default Home;
