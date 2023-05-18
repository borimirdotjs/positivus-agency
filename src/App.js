import { useRef } from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Processes from "./components/Processes/Processes";
import Services from "./components/ServicesPage/Services";
import Studies from "./components/Studies/Studies";
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import { Toaster } from "react-hot-toast";

function App() {
  const quoteRef = useRef(null);
  const servicesRef = useRef(null);
  const studiesRef = useRef(null);
  const processesRef = useRef(null);
  const teamRef = useRef(null);
  const testimonialsRef = useRef(null);

  return (
    <>
      <div className="App">
        <Toaster />
        <Landing
          quoteRef={quoteRef}
          servicesRef={servicesRef}
          studiesRef={studiesRef}
          processesRef={processesRef}
          testimonialsRef={testimonialsRef}
          teamRef={teamRef}
        />
        <Services servicesRef={servicesRef} />
        <Cta />
        <Studies studiesRef={studiesRef} />
        <Processes processesRef={processesRef} />
        <Team teamRef={teamRef} />
        <Testimonials testimonialsRef={testimonialsRef} />
        <Contact quoteRef={quoteRef} />
        <Footer
          quoteRef={quoteRef}
          servicesRef={servicesRef}
          studiesRef={studiesRef}
          processesRef={processesRef}
          testimonialsRef={testimonialsRef}
          teamRef={teamRef}
        />
      </div>
    </>
  );
}

export default App;
