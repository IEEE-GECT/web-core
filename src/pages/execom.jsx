import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Team } from "../components/team.component"

const ExecomPage = () => (
  <Layout route="/execom">
    <Seo title="Execom" />

    <div className="pt-5 pb-10 px-2 sm:px-10">
      <div className="rounded-lg shadow-2xl glass-effect">
        <Team />
      </div>
    </div>
  </Layout>
)

export default ExecomPage
