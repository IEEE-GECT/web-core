import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Link 3" />

    <div className="pt-10 pb-5 px-2 sm:px-10">
      <p className="py-72 bg-white rounded-lg shadow-2xl">
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
    </div>

    <div className="pt-5 pb-10 px-2 sm:px-10">
      <p className="py-72 bg-white rounded-lg shadow-2xl">
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
    </div>
  </Layout>
)

export default IndexPage
