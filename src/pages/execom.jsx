import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Team } from "../components/team.component"

const ExecomPage = () => (
  <Layout route="/execom">
    <Seo
      title="Execom"
      image="https://8s9ot3736652r3v5s22dfc81-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Consensus-Kills-Business-Innovation-600x315-cropped.jpg"
    />

    <div className="pt-5 pb-10 px-2 sm:px-10">
      <div className="rounded-lg shadow-2xl glass-effect">
        <Team />
      </div>
    </div>
  </Layout>
)

export default ExecomPage
