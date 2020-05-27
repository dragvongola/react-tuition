import React from "react";
import "styles.css";
import "tailwindcss/dist/base.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderBase, {
  NavLinks,
  NavLink,
  PrimaryLink,
} from "components/headers/light.js";
import Steps from "components/features/ThreeColSimple";
import Faq from "components/faqs/SingleCol";
import Footer from "components/footers/MiniCenteredFooter";
import Home from "components/Homepage";
import Forms from "components/forms/SimpleContactUs";

function App() {
  return (
    <Router>
      <HeaderBase />
      <AnimationRevealPage>
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
          <Route path={process.env.PUBLIC_URL + "/FAQ"} component={Faq} />
          <Route path={process.env.PUBLIC_URL + "/Contact"} component={Forms} />
          <Route path={process.env.PUBLIC_URL + "/"} component={Home} />
        </Switch>
        <Footer />
      </AnimationRevealPage>
    </Router>
  );
}

export default App;
