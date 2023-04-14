import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import CoverflowEffect from "../components/slider.component"
import { Content } from "../components/tems.component"

const IndexPage = () => (
  <Layout route="/">
    <Seo title="" />
    <div className="relative -mt-20" style={{ height: `100vh` }}>
      <StaticImage
        src="../images/group.jpg"
        quality={100}
        placeholder="blurred"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="cover"
        className="inset-0"
        style={{ position: "absolute" }}
      />
      <div className="bg-black opacity-40 absolute inset-0" />
      <div className="absolute h-full w-full text-white flex items-center justify-center">
        <h1 className="text-3xl sm:text-6xl font-bold">
          IEEE Student Branch GEC Thrissur
        </h1>
      </div>
    </div>

    <div className="pt-10 pb-5 px-2 sm:px-10">
      <div className="rounded-lg shadow-2xl glass-effect">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto sm:py-16">
            <h1 className="font-medium text-3xl mb-8 text-gray-900 text-left ml-8 ">
              Upcoming Events
            </h1>

            <div className="flex justify-center align-center ">
              <div className="min-w-full md:w-4/6">
                <CoverflowEffect />
                <p className="text-xs pt-1 sm:text-sm">
                  Click on Event Poster to Register
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div className="pt-5 pb-5 px-2 sm:px-10">
      <div className="rounded-lg shadow-2xl glass-effect">
        <Content />
      </div>
    </div>

    <div className="pt-5 pb-10 px-2 sm:px-10">
      <div className="rounded-lg shadow-2xl glass-effect">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
              <div className="w-full sm:p-4 px-4 mb-6">
                <h1 className="title-font font-medium text-3xl mb-4 text-gray-900">
                  About Us
                </h1>
                <div className="leading-relaxed text-justify text-medium">
                  Ever since it's inception,the IEEE SB GECT has always been a
                  very active presence in the institution. Being the very first
                  technical society student branch of the institution, the SB
                  has played a very vital and crucial role in the development of
                  research and technology in the institution. The SB has evolved
                  into being accommodative of all fields of interests apart from
                  science and technology. As amazing as it's past,the SB
                  continues to be one of the top tier SBs of the IEEE Kerala
                  Section, courtesy to it's consistently top-notch activities!!
                </div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  212
                </h2>
                <p className="leading-relaxed">Active Members</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  8
                </h2>
                <p className="leading-relaxed">Societies</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  35
                </h2>
                <p className="leading-relaxed">Awards</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  200+
                </h2>
                <p className="leading-relaxed">Events</p>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <img
                className="object-cover object-center w-full h-full"
                src="https://ik.imagekit.io/ieeeGec/about_v0_w_uFn4.png"
                alt="stats"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default IndexPage
