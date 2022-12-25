import React from "react";
import TestimonialCard from "./testimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jeet Beniwal",
      text: "I recently worked with a Escube solutions to redesign and launch a new website for my business, and I have to say that I was extremely impressed with the level of service and expertise that I received. From the initial consultation to the final launch, the team at the web agency was professional, responsive, and always willing to go the extra mile to ensure that my vision for the website was realized.",
      designation: "Full Stack Developer",
      image:
        "https://ik.imagekit.io/afi283alh/jeet.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671984973188",
    },
    {
      name: "Amit Das",
      text: "Escube solutions are a technical whiz in their field and true believers in what they do. They stand out from the crowd because of their out of the box approach. By nature, they are nimble and extremely supportive to their clients.",
      designation: "Designer, Entrepreneur",
      image:
        "https://ik.imagekit.io/afi283alh/amit.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671984973164",
    },
  ];

  return (
    <section className="text-gray-400 body-font bg-gray-900" id="testimonials">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial) => {
            return <TestimonialCard testimonial={testimonial} />;
          })}
        </div>
      </div>
    </section>
  );
}
