import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("LO7HtUwa", { container: container.current })
  }, [])

  return (
    <Layout route="/e/recon">
      <Seo
        title="RECON"
        description="IEEE COMMSOC | RECON"
        image="https://ik.imagekit.io/fnsxnpbnzvj/ieee/Recon_xWdoO1CiH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656668343309"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
