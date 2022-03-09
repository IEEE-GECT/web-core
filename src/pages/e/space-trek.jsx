import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("GUNBFTDq", { container: container.current })
  }, [])

  return (
    <Layout route="/e/space-trek">
      <Seo
        title="Space Trek"
        description="Online Treasure Hunt"
        image="https://ik.imagekit.io/fnsxnpbnzvj/ieee/space_trek_3iRFrDQfY.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646824178153"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
