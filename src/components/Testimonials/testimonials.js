import React from "react";
import TestimonialCard from "./testimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Amit Das",
      text: "Escube solutions are a technical whiz in their field and true believers in what they do. They stand out from the crowd because of their out of the box approach. By nature, they are nimble and extremely supportive to their clients.",
      designation: "Full Stack Designer",
    },
    {
      name: "Jeet Beniwal",
      text: "I recently worked with a Escube solutions to redesign and launch a new website for my business, and I have to say that I was extremely impressed with the level of service and expertise that I received. From the initial consultation to the final launch, the team at the web agency was professional, responsive, and always willing to go the extra mile to ensure that my vision for the website was realized.",
      designation: "Full Stack Developer",
    },
  ];

  return (
    <section class="text-gray-400 body-font bg-gray-900" id="testimonials">
      <div class="container px-5 py-24 mx-auto">
        <h1 class="text-3xl font-medium title-font text-white mb-12 text-center">
          Testimonials
        </h1>
        <div class="flex flex-wrap -m-4">
          {testimonials.map((testimonial) => {
            return <TestimonialCard testimonial={testimonial} />;
          })}
        </div>
      </div>
    </section>
  );
}
