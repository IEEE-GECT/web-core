import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Homeaboutus from "../components/homecomponents/homeaboutus"
import HomeHeroImg from "../components/homecomponents/homeheroimg"
import CoverflowEffect from "../components/homecomponents/slider.component"
import { Content } from "../components/homecomponents/tems.component"

const IndexPage = () => (
  <Layout route="/">
    <Seo title="" />
    <HomeHeroImg />
    <CoverflowEffect />
    <Homeaboutus />
    <Content />
  </Layout>
)

export default IndexPage
