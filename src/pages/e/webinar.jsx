import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("b3DTYBgY", { container: container.current })
  }, [])

  return (
    <Layout route="/e/webinar">
      <Seo
        title="WEBINAR"
        description="Linked-In and Off-Campus Placements"
        image="https://ik.imagekit.io/fnsxnpbnzvj/ieee/webinar_FjHeMIQ30.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655954695397"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
