import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("kXfs8Afc", { container: container.current })
  }, [])

  return (
    <Layout route="/e/symposium">
      <Seo
        title="SYMPOSIUM"
        description="Is India ready for 5G?"
        image="https://ik.imagekit.io/fnsxnpbnzvj/ieee/Symposium1_vaV1WGSYh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655462511325"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
