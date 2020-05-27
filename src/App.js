import React from "react";
import "styles.css";
import "tailwindcss/dist/base.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial";
import Stats from "components/features/ThreeColCenteredStatsPrimaryBackground";
import Steps from "components/features/ThreeColSimple";
import Tetsimonials from "components/testimonials/SimplePrimaryBackground";
import Footer from "components/footers/MiniCenteredFooter";

function App() {
  return (
    <AnimationRevealPage>
      <Hero />
      <Stats />
      <Steps />
      <Tetsimonials />
      <Footer />
    </AnimationRevealPage>
  );
}

export default App;
