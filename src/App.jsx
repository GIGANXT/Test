import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Project from "./components/Project";
import Testimonials from "./components/Testimonials";
import Roadmap from "./components/Roadmap";
import FAQs from "./components/FAQs";


// import TermsConditions from "./components/TermsConditions";
import PrivacyPolicy from "./components/Privacypolicy";
import TermsConditions from "./components/TermsConditions";

const App = () => {
  return (
    <>
      <Routes>
        {/* Main Website Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Benefits />
              <Project />
              <Testimonials />
              <Roadmap />
              <FAQs />
              <Footer />
              <ButtonGradient />
            </>
          }
        />
        {/* Privacy Policy Page */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions/>} />
      </Routes>
    </>
  );
};

export default App;
