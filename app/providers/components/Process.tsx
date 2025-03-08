import React from "react";
import Image from "next/image";
import Link from "next/link";
import s1_1 from "../../../public/process/s1_1.svg";
import s1_2 from "../../../public/process/s1_2.svg";
import s2_1 from "../../../public/process/s2_1.svg";
import s2_2 from "../../../public/process/s2_2.svg";
import s2_3 from "../../../public/process/s2_3.svg";
import s3_1 from "../../../public/process/s3_1.svg";
import s3_2 from "../../../public/process/s3_2.png";
export default function Process() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #DDD7CF, #32200B)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-32">
          {/* Step 1 */}
          <div className="flex flex-col sm:flex-row w-full">
            <div className="w-full sm:w-16 h-16 sm:h-auto rounded-b-3xl sm:rounded-b-none sm:rounded-r-3xl relative border border-[#170D00]">
              <div className="absolute top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl">
                1
              </div>
            </div>
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 lg:mb-8">
                SAMPLE PROCESSING
              </h1>
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex-1 mb-6 md:mb-0 md:mr-8 lg:mr-12">
                  <h2 className="text-2xl sm:text-3xl font-normal mb-4">
                    Measure with Precision
                  </h2>
                  <p className="leading-relaxed font-thin">
                    Generation Lab partners with Tempus and Illumina to ensure
                    gold-standard accuracy in our SystemAge Test, leveraging
                    Illumina's sequencing and Tempus' CLIA-certified lab for
                    precise aging insights.
                  </p>
                </div>
                <div className="flex-1">
                  <Image
                    src={s1_1}
                    alt="Tempus Logo"
                    className="max-w-full mb-4"
                  />
                  <Image
                    src={s1_2}
                    alt="Illumina Logo"
                    className="max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Step 2 */}
          <div className={"flex flex-col sm:flex-row"}>
            <div className="w-full sm:w-16 h-16 sm:h-auto rounded-b-3xl sm:rounded-b-none sm:rounded-r-3xl border border-[#170D00] relative">
              <div className="absolute top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl">
                2
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 lg:mb-8">
                  MOST ADVANCED ANALYSIS
                </h1>
                <h2 className="text-2xl sm:text-3xl font-normal mb-4 sm:mb-6 lg:mb-8">
                  Go Beyond Just A Number
                </h2>
                <div className="flex flex-col lg:flex-row">
                  <div className="flex-1 mb-8 lg:mb-0 lg:mr-16">
                    <p className="text-lg leading-relaxed mb-4 font-thin">
                      <span className="font-semibold">BioNoise Level:</span>{" "}
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-lg leading-relaxed mb-4 font-thin">
                      <span className="font-semibold">Aging Trajectory:</span>{" "}
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Excepteur sint
                      occaecat cupidatat non.
                    </p>
                    <Link
                      href="/providers/register"
                      className="bg-[#f8f3e3] text-black px-6 py-3 rounded-full font-medium shadow-[0_0_15px_rgba(248,243,227,0.5)] hover:shadow-[0_0_20px_rgba(248,243,227,0.7)] transition-all"
                    >
                      Read more in our white paper
                    </Link>
                  </div>

                  <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                    <Image
                      src={s2_1}
                      alt="Aging Curve"
                      className="mb-4 rounded-lg shadow-md"
                    />
                    <div className="flex flex-col space-x-4">
                      <h3 className="text-xl font-normal mb-2">
                        Read our papers:
                      </h3>
                      <Image
                        src={s2_2}
                        alt="Paper 1"
                        className="w-full rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Aging Factors Section */}
              <div className={"flex flex-col lg:flex-row gap-8 lg:gap-4"}>
                <div
                  className={
                    "flex-1 flex flex-col items-center lg:items-end gap-12 lg:gap-24 relative"
                  }
                >
                  {/* Background SVGs */}
                  <div className="absolute inset-0 z-0 hidden xl:block">
                    <div className="absolute top-[-50px] left-20">
                      <Image
                        src={s2_3}
                        width={300}
                        height={300}
                        alt="Background SVG 1"
                        className="object-cover opacity-40"
                      />
                    </div>
                    <div className="absolute top-[180px] left-20">
                      <Image
                        src={s2_3}
                        width={300}
                        height={300}
                        alt="Background SVG 2"
                        className="object-cover opacity-40"
                      />
                    </div>
                  </div>
                  <div className="w-full  max-w-sm lg:w-96 flex flex-col">
                    <div className="w-fit text-[#DE6430] border border-[#DE6430] px-3 py-1 rounded-full text-xs font-medium mb-3">
                      Attention
                    </div>
                    <h4 className="text-xl text-gray-800 mb-2">
                      Cardiac System
                    </h4>
                    <p className="text-sm">
                      38.2 years old, 8.2 years older than expected,
                      contributing <span className="font-bold">28.6%</span> to
                      your overall aging process
                    </p>
                  </div>
                  <div className="w-full max-w-sm lg:w-96 flex flex-col">
                    <div className="w-fit text-[#DE6430] border border-[#DE6430] px-3 py-1 rounded-full text-xs font-medium mb-3">
                      Attention
                    </div>
                    <h4 className="text-xl text-gray-800 mb-2">
                      Reproductive System
                    </h4>
                    <p className="text-sm">
                      36.2 years old, 6.2 years older than expected,
                      contributing <span className="font-bold">20.1%</span> to
                      your overall aging process
                    </p>
                  </div>
                </div>
                <div
                  className={
                    "p-6 flex-1 flex flex-col gap-4 sm:gap-6 justify-between"
                  }
                >
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    Identify Top Aging Factors
                  </h3>
                  <p className="mb-8 font-thin">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p className="mb-10 font-thin">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <Link
                    href="/providers/register"
                    className="w-full sm:w-48 bg-[#f8f3e3] text-black px-6 py-3 rounded-full font-medium shadow-[0_0_15px_rgba(248,243,227,0.5)] hover:shadow-[0_0_20px_rgba(248,243,227,0.7)] transition-all text-center"
                  >
                    View sample report
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Step 3 */}
          <div className="text-[#F4EFE7] flex w-full">
            <div className="w-16 rounded-r-3xl border border-[#FBF6ED] shadow-md relative">
              <div className="absolute top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl">
                3
              </div>
            </div>
            <div className="flex-1 p-10">
              <h1 className="text-5xl font-medium mb-8">
                Intervene with Confidence
              </h1>
              <div className="flex items-start">
                <div className="flex-1 mr-12">
                  <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-baseline">
                    <h2 className="text-3xl font-normal mb-4 sm:mb-0">
                      Intelligent Interventions
                    </h2>
                    <div className="mt-8 sm:mt-0">
                      <Link
                        href="/providers/register"
                        className="bg-[#f8f3e3] text-black px-6 py-3 rounded-full font-medium shadow-[0_0_15px_rgba(248,243,227,0.5)] hover:shadow-[0_0_20px_rgba(248,243,227,0.7)] transition-all"
                      >
                        Try It
                      </Link>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-4 font-thin font-manrope">
                    <span className="font-semibold">
                      Intelligent Recommendations:
                    </span>{" "}
                    Tailored for each test taker and for each report, we
                    generate a clinically-relevant action plan powered by our
                    XXX algorithm.
                  </p>
                  <p className="text-lg leading-relaxed mb-4 font-thin">
                    <span className="font-semibold">Tracking:</span> Send the
                    action plan to your clients and track their completion
                    rates. Make informed adjustment each cycle to dynamically
                    achieve the health goals.
                  </p>
                </div>
              </div>
              <div className={"flex flex-col gap-4 md:flex-row"}>
                <Image
                  src={s3_1}
                  alt="Paper 1"
                  className="w-full rounded-lg shadow-md"
                />
                <Image
                  src={s3_2}
                  alt="Paper 1"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
