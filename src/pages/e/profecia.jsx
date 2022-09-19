import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("TMEj45cw", { container: container.current })
  }, [])

  return (
    <Layout route="/e/profecia">
      <Seo
        title="PROFECIA"
        description="Workshop"
        image="https://ik.imagekit.io/fnsxnpbnzvj/ieee/IMG-20220919-WA0005_4LMpd5s6X.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663586798779"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage