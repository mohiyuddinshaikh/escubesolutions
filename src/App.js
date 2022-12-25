import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import OurWork from "./components/OurWork/ourWork";
import Testimonials from "./components/Testimonials/testimonials";
import ContactUs from "./components/ContactUs/contactUs";
import { useEffect, useState } from "react";
import Mission from "./components/Mission/mission";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const listenScrollEvent = (e) => {
    if (window.scrollY > 73) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className="primary-container">
      <Header isScrolled={isScrolled} />
      <Hero />
      <Mission />
      <OurWork />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default App;
