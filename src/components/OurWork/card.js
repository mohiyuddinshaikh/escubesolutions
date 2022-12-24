import React from "react";
import LinkSVG from "../../assets/icons/Link";
import Tooltip from "react-simple-tooltip";
import { COLOR, IMAGES } from "../../constants";

export default function Card({ project }) {
  console.log("project.img", project.img);
  return (
    <div class="xl:w-1/3 md:w-1/2 p-4">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        {/* <a href="#!"> */}
        <img class="rounded-t-lg" src={project.img || IMAGES.vegeta} alt="" />
        {/* </a> */}
        <div class="px-6 py-4 bg-gray-800">
          <div className="flex flex-wrap w-full gap-2 items-center mb-3">
            <h5 class="text-white text-xl font-medium">
              {project?.title || "Title"}
            </h5>
            <Tooltip
              content="View"
              background={COLOR.backgroundColor}
              border={COLOR.backgroundColor}
              padding={8}
              radius={4}
              fontFamily="inherit"
              fontSize="inherit"
            >
              <a href={project?.link} target="_blank">
                <span className="cursor-pointer">
                  <LinkSVG />
                </span>
              </a>
            </Tooltip>
          </div>
          {/* <p class="text-gray-700 text-base mb-4">
            {project?.description || "Description"}
          </p> */}
          <div className="flex flex-wrap text-base mb-2 gap-1">
            {project?.support?.includes(1) ? (
              <div class="flex justify-center items-center font-medium py-1 px-2 bg-white rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
                <div class="text-xs font-normal leading-none max-w-full flex-initial">
                  Web
                </div>
              </div>
            ) : null}
            {project?.support?.includes(2) ? (
              <div class="flex justify-center items-center font-medium py-1 px-2 bg-white rounded-full text-green-700 bg-green-100 border border-green-300 ">
                <div class="text-xs font-normal leading-none max-w-full flex-initial">
                  Mobile
                </div>
              </div>
            ) : null}
          </div>
          {/* <a href={project?.link} target="_blank">
            <button
              type="button"
              class="w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              hre
            >
              Visit
            </button>
          </a> */}
        </div>
      </div>
    </div>
  );
}
