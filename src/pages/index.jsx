import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="" />
    <h1>Hi people</h1>
    <p>Welcome to our new Gatsby site.</p>
    <p>
      Appo nammuk pani thudangam makkale...
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
    <StaticImage
      src="../images/work.png"
      height={300}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Work"
      style={{ marginTop: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
