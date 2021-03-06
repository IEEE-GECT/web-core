import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="" />
    <div className="relative -mt-20" style={{ height: `calc(90vh - 90px)` }}>
      <StaticImage
        src="../images/group.jpg"
        quality={100}
        placeholder="blurred"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="cover"
        className="inset-0"
        style={{ position: "absolute" }}
      />
      <div className="bg-black opacity-40 absolute inset-0"></div>
      <div className="absolute h-full w-full text-white flex items-center justify-center">
        <h1 className="text-6xl font-bold">IEEE Student Branch GEC Thrissur</h1>
      </div>
    </div>

    <p className="py-72">
      Content
      <span role="img" aria-label="partying-face">
        🥳
      </span>
      <span role="img" aria-label="partying-face">
        🥳
      </span>
      <span role="img" aria-label="smiling-face-with-halo">
        😇
      </span>
    </p>
  </Layout>
)

export default IndexPage
