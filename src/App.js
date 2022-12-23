import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import OurWork from "./components/OurWork/ourWork";
import Testimonials from "./components/Testimonials/testimonials";
import ContactUs from "./components/ContactUs/contactUs";

function App() {
  return (
    <div className="primary-container">
      <Header />
      <Hero />
      <OurWork />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default App;
