import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import CoverflowEffect from "../components/slider.component"
import { Content } from "../components/tems.component"
import HeroSection from "../components/hero-section"

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
        <Content />
      </div>
    </div>

    {/* <CoverflowEffect /> */}

    <div className="pt-5 pb-10 px-2 sm:px-10">
      <div className="rounded-lg shadow-2xl glass-effect">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <h1 class="font-medium text-3xl mb-8 text-gray-900 text-left">
              Upcoming Events
            </h1>

            <div className="flex justify-center align-center">
              <div
                style={{
                  height: "70%",
                  width: "70%",
                }}
              >
                {/* <div className="rounded-lg border border-gray-300 p-2 w-1/2">
                Content
              </div>
              <div className="rounded-lg border border-gray-300 p-2 w-1/2">
                Content
              </div> */}
                <CoverflowEffect />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default IndexPage
