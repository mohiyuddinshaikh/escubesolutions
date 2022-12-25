import React from "react";
import Card from "./card";

export default function OurWork() {
  const projects = [
    {
      img: "https://ik.imagekit.io/afi283alh/onboarding.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671903493713",
      title: "User Onboarding",
      description: "Web, Mobile",
      link: "https://mohiyuddins-user-onboard.netlify.app/",
      support: [1, 2],
    },
    {
      img: "https://ik.imagekit.io/afi283alh/portfolio.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671903493720",
      title: "Portfolio Website",
      description: "Web, Mobile",
      link: "https://mohiyuddins-portfolio.netlify.app/",
      support: [1, 2],
    },
    {
      img: "https://ik.imagekit.io/afi283alh/kanban.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671903493800",
      title: "Kanban Board",
      description: "Web, Mobile",
      link: "https://kanban-board-mohiyuddin.netlify.app/",
      support: [1, 2], // 1: web, 2: mobile
    },
    {
      img: "https://ik.imagekit.io/afi283alh/weather.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671903493707",
      title: "Weather Tracker",
      description: "Web, Mobile",
      link: "https://escube-weather-tracker-usa.netlify.app/",
      support: [1, 2],
    },
    {
      img: "https://ik.imagekit.io/afi283alh/uno.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671903493871",
      title: "UNO",
      description: "Web",
      link: "https://mohiyuddins-uno.netlify.app/",
      support: [1],
    },
    {
      img: "https://ik.imagekit.io/afi283alh/starbucks.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671903493871",
      title: "Starbucks Concept",
      description: "Web",
      link: "https://escube-starbucks-concept.netlify.app/",
      support: [1],
    },
  ];
  return (
    <section className="text-gray-400 body-font" id="work">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Our Work
          </h1>
          {/* <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p> */}
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => {
            return <Card project={project} />;
          })}
        </div>
        {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button> */}
      </div>
    </section>
  );
}
