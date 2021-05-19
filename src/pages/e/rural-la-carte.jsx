import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const IndexPage = () => (
  <Layout route="/e/rural-la-carte">
    <Seo title="Rural la carte" />

    <div style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}>
      <iframe
        id="typeform-full"
        width="100%"
        height="100%"
        frameborder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src="https://bit.ly/3ouE80w"
        onLoad={() => window.scroll({ top: 0, left: 0 })}
      ></iframe>
    </div>
  </Layout>
)

export default IndexPage
