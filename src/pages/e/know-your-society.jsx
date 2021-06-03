import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("iE6R03TS", { container: container.current })
  }, [])

  return (
    <Layout route="/e/know-your-society">
      <Seo
        title="Know Your Society"
        description="Session on benifits of IAS/PELS"
        image="https://ik.imagekit.io/ieeeGec/enshrine_c4A2eLU1E.jpg?tr=w-1080,h-1080,fo-auto"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
