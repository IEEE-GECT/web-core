import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("SxeHAzdx", { container: container.current })
  }, [])

  return (
    <Layout route="/e/SPS-ComSoc-Inauguration">
      <Seo
        title="Inauguration of SPS and ComSoc"
        description="Register for the Inaugral Event"
        image="https://ik.imagekit.io/ieeeGec/sqr_IPcEy4efL?ik-sdk-version=javascript-1.4.3&updatedAt=1643813385138"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
