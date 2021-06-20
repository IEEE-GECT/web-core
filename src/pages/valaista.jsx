import * as React from "react"
import { Link } from "gatsby"
import "../styles/valaista.styles.css"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

const Valaista = () => (
  <>
    <Seo
      title="Valaista | Aspire to Inspire"
      fav="https://ik.imagekit.io/ieeeGec/tr:w-320,h-320,cm-extract,x-160,y-160/va_Kd94t1-A-.jpeg"
      image="https://ik.imagekit.io/ieeeGec/tr:w-320,h-320,cm-extract,x-160,y-160/va_Kd94t1-A-.jpeg"
      description="Technical Event Series"
    />
    <section>
      <div className="bg-black text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-center sm:items-start p-0 px-3 sm:p-8 lg:pl-16 text-center sm:text-left">
            <h1 className="ieee-header text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
              IEEE SB GECT PRESENTS
            </h1>
            <h2 className="valaista text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Valaista | aspire to inspire
            </h2>
            {/* <h2 className="valaista text-xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              aspire to inspire
            </h2> */}
            {/* <p className="valaista text-sm md:text-base text-gray-50 mb-4">
              aspire to inspire
            </p> */}
            <Link
              to="/e/inauguration"
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              style={{ maxWidth: "130px" }}
            >
              Register for Inauguration
            </Link>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/2 flex justify-center">
            <img
              src="https://ik.imagekit.io/ieeeGec/final-inaugration_PCX1vcaGP.jpeg"
              alt="Dr.K Radakrishnan"
              style={{ maxHeight: "550px" }}
            />
          </div>
        </div>
      </div>
    </section>

    <section className="text-gray-200 body-font bg-black">
      <div className="container px-5 pt-0 sm:py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="inline-block w-8 h-8 text-gray-400 mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed text-lg">
            Valaista aspires to inspire in you that spark of innovation and
            creativity very necessary for every budding engineer. Here, we have
            a series of technical events compiled to give you that perfect blend
            of knowledge and fun. Organised by IEEE SB GECT, this event aims to
            provide students an in-depth understanding of various engineering
            domains combined with hands-on experience in the best way possible.
            This is a golden opportunity for you to expand your skillset and get
            updated with latest techno.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-8 mb-6"></span>
        </div>
      </div>
    </section>

    <section>
      <div className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-yellow-300 uppercase tracking-loose">
              Working Process
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Working Process of Valaista
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              {" "}
              Feel free to explore what Valaista has in store.{" "}
            </p>
            {/* <a
              href="#"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a> */}
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  // style="right: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                ></div>
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  // style="left: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12 hidden sm:block"></div>
                  <div className="order-1 w-full sm:w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">
                      9:00am, 19 June, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Inauguration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      In the gracious presence of <br></br>Padma Bhushan Dr. K
                      Radhakrishnan
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12 hidden sm:block"></div>
                  <div className="order-1 w-full sm:w-5/12 px-1 py-4 text-left ml-1 sm:ml-0">
                    <p className="mb-3 text-base text-yellow-300">
                      14-17 June, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Registeration for Aurora
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 mb-4">
                      Participate online. The links for your registered events
                      will be sent to you via email and whatsapp groups.
                      <br></br>IEEE Members - 50 Rs.<br></br>
                      Non-IEEE Members - 75 Rs.<br></br>Send payments via GPAY
                      to 9188804155
                    </p>
                    <Link
                      to="/e/aurora"
                      className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                      style={{ maxWidth: "130px" }}
                    >
                      Registration Closed
                    </Link>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12 hidden sm:block"></div>
                  <div className="order-1 w-full sm:w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">
                      {" "}
                      7pm, 19 June, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Aurora - A Space colloquy
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Join experts and education specialists from Society for
                      Space Education, Research and Development (SSERD). A power
                      packed event with knowledge, quizzes and breakout
                      sessions. Ask questions, get teaching resources and share
                      the excitement of space exploration with us.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12 hidden sm:block"></div>
                  <div className="order-1 w-full sm:w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">
                      {" "}
                      5.30 pm, 23 June, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Mind to Mind - Mentoring Programme
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 mb-4">
                      This is a unique opportunity for all GECTians, wherein you
                      will have access to the vast alumni network of GEC
                      Thrissur that will help you grow professionally and
                      personally by forming meaningful relations with our
                      alumni.
                    </p>
                    <Link
                      to="/e/mind-to-mind"
                      className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                      style={{ maxWidth: "130px" }}
                    >
                      Register
                    </Link>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12 hidden sm:block"></div>

                  <div className="order-1 w-full sm:w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-yellow-300"></p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left ml-1 sm:ml-0">
                      More events to be announced soon.
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      {/* The winners will be contacted by our team for their
                      addresses and the winning goodies will be sent at their
                      addresses. */}
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://ik.imagekit.io/ieeeGec/tr:w-500,h-500,c-force/kissclipart-engineers-day-poster-clipart-engineering-engineer-100aaed4e8987d8a_PunJI1E64.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Another time line */}
    {/* <section className="text-white body-font bg-black">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">
            1
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-white mb-1 text-xl">
                Shooting Stars
              </h2>
              <p className="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">
            2
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-white mb-1 text-xl">
                The Catalyzer
              </h2>
              <p className="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">
            3
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-white mb-1 text-xl">
                The 400 Blows
              </h2>
              <p className="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">
            4
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-white mb-1 text-xl">
                Neptune
              </h2>
              <p className="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    <footer className="text-white body-font bg-black">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/"
          aria-label="Go home"
          className="inline-flex mx-auto items-center"
        >
          <StaticImage
            src="../images/logo-white.png"
            quality={100}
            width={160}
            placeholder="tracedSVG"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="logo"
          />
        </a>
      </div>
    </footer>
  </>
)

export default Valaista
