import React from "react";
import "./hero.css";
import HeroImage from "./heroImage";
import HeroText from "./heroText";
import { useMobileOrientation } from "react-device-detect";

export default function Hero() {
  const { isPortrait } = useMobileOrientation();

  return (
    <section
      className="text-gray-400 body-font h-screen flex hero-container"
      id="home"
    >
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        {!isPortrait ? (
          <>
            <HeroText />
            <HeroImage />
          </>
        ) : (
          <>
            {/* <HeroImage /> */}
            <HeroText />
          </>
        )}
      </div>
    </section>
  );
}
