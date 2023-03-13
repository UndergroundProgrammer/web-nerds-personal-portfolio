import { useEffect, useState } from "react";

import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Tools from "./components/Tools";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.onscroll = () => {
      setIsScrolling(true);
    };

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="max-w-screen-2xl mx-auto font-body text-gray">
        <section
          className={`max-w-screen-2xl  top-0 w-full fixed transition-all duration-200 z-20 ${
            scrollPosition > 50 ? "bg-white shadow py-3" : "bg-transparent py-5"
          }`}
        >
          <Navbar />
        </section>
        <section>
          <Hero />
        </section>
        <section id="services">
          <div>
            <h1 className="section-heading  text-center font-body font-light text-3xl">
              What I Offer
            </h1>
            <h1 className="uppercase text-[5rem] text-center font-bold text-primary/20 -mt-20 -z-10">
              services
            </h1>
          </div>
          <Services />
        </section>
        <section id="portfolio">
          <div>
            <h1 className="section-heading  text-center font-body font-light text-3xl">
              What I Have Made
            </h1>
            <h1 className="uppercase text-[5rem] text-center font-bold text-primary/20 -mt-20 -z-10">
              portfolio
            </h1>
          </div>
          <Portfolio />
        </section>
        <section id="portfolio">
          <div>
            <h1 className="section-heading  text-center font-body font-light text-3xl">
              What Tech Stack Do I Use
            </h1>
            <h1 className="uppercase text-[5rem] text-center font-bold text-primary/20 -mt-20 -z-10">
              Tools & Technologies
            </h1>
            <Tools />
          </div>
        </section>
        <section id="testimonials">
          <div>
            <h1 className="section-heading  text-center font-body font-light text-3xl">
              What Our Cllients Say
            </h1>
            <h1 className="uppercase text-[5rem] text-center font-bold text-primary/20 -mt-20 -z-10">
              testimonials
            </h1>
          </div>
          <Testimonials />
        </section>
        <section id="contact">
          <div>
            <h1 className="section-heading  text-center font-body font-light text-3xl">
              What Are You Waiting For
            </h1>
            <h1 className="uppercase text-[5rem] text-center font-bold text-primary/20 -mt-20 -z-10">
              contact
            </h1>
          </div>
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
