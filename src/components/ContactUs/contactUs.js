import React from "react";
import Instagram from "../../assets/icons/instagram";
import Phone from "../../assets/icons/phone";
import Whatsapp from "../../assets/icons/whatsapp";
import { COUNTRY_CODE, OFFICIAL } from "../../constants";
import "./contactUs.css";

export default function ContactUs() {
  return (
    <section className="text-gray-400 body-font relative" id="contact">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Need a website? Get in touch!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Send us a message or reach us via Social Media
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form
            target="_blank"
            action="https://formspree.io/f/xknawkzn"
            method="POST"
          >
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
            <a className="text-indigo-400 text-lg force-select">
              {OFFICIAL.EMAIL}
            </a>
            <p className="leading-normal mb-5">
              Call us :{"  "}
              <a
                href={`tel:${COUNTRY_CODE}${OFFICIAL.PHONE_NUMBER}`}
                className="hover:text-white"
              >
                {COUNTRY_CODE}
                {OFFICIAL.PHONE_NUMBER}
              </a>
            </p>
            <span className="inline-flex">
              <Instagram />
              <span className="ml-4 hover:text-green-300">
                <a
                  target="_blank"
                  href={`https://wa.me/${COUNTRY_CODE}${OFFICIAL.PHONE_NUMBER}/`}
                >
                  <Whatsapp />
                </a>
              </span>
              <span className="ml-4 hover:text-blue-400">
                <a
                  target="_blank"
                  href={`tel:${COUNTRY_CODE}${OFFICIAL.PHONE_NUMBER}`}
                >
                  <Phone />
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
