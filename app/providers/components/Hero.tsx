import React from "react";
import styles from "./index.module.scss";

export default function Hero() {
  return (
    <section
      className={`relative pt-32 pb-24 text-[#FEF9EE] overflow-hidden ${styles.hero}`}
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 mb-16 md:mb-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-2 leading-tight">
            Measure Aging
          </h1>
          <p className="text-xl md:text-2xl font-light italic mb-10">
            with golden standard
          </p>
          <a
            href="#learn-test"
            style={{
              borderRadius: 80,
              background: "rgba(255, 255, 255, 0.20)",
            }}
            className="group inline-flex items-center px-8 py-3 hover:shadow-[0px_2.1px_27.3px_0px_#FBF6ED] rounded-full transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="font-normal text-sm uppercase">
              LEARN ABOUT OUR TEST
            </span>
          </a>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-10 md:mt-18 flex flex-col md:flex-row-reverse justify-between items-center">
        <div className="md:w-1/2 text-right mb-16 md:mb-0">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-2 leading-tight">
            Intervene Health
          </h2>
          <p className="text-xl md:text-2xl font-light italic mb-10">
            with scientific confidence
          </p>
          <a
            href="#action-plan"
            style={{
              borderRadius: 80,
              background: "rgba(255, 255, 255, 0.20)",
            }}
            className="group inline-flex items-center px-8 py-3 hover:shadow-[0px_2.1px_27.3px_0px_#FBF6ED] rounded-full transition-all"
          >
            <span className="font-normal text-sm uppercase">
              LEARN ABOUT ACTION PLAN
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
        <div className="md:w-1/2">
          {/* Left intentionally empty as in the original design */}
        </div>
      </div>
    </section>
  );
}
