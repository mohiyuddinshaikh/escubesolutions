import React from "react";

export default function Instagram() {
  return (
    <a
      className="ml-4 hover:text-pink-500"
      target="_blank"
      href="https://www.instagram.com/escubesolutions/"
    >
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
      </svg>
    </a>
  );
}
