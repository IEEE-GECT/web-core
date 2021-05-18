import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Team } from "../components/team.component"
const IndexPage = () => (
  <Layout route="/link5">
    <Seo title="Link 5" />

    

    <div className="pt-5 pb-10 px-2 sm:px-10">
      <div className="rounded-lg shadow-2xl glass-effect">
        <Team />
      </div>
    </div>
  </Layout>
)

export default IndexPage
