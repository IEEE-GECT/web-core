import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const IndexPage = () => (
  <Layout route="/e">
    <Seo title="Wordsworld" />

    <div className="h-screen">
      <iframe
        id="typeform-full"
        width="100%"
        height="100%"
        frameborder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src="https://form.typeform.com/to/I9XaiGIp?typeform-medium=embed-snippet"
      ></iframe>
    </div>
  </Layout>
)

export default IndexPage
