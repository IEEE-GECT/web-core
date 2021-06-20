import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("IIgXL3Gw", { container: container.current })
  }, [])

  return (
    <Layout route="/e/inauguration">
      <Seo
        title="Introduction to Robotics"
        description="Robotics and Automation Society"
        image="https://ik.imagekit.io/ieeeGec/tr:w-1035,h-1035,cm-extract,x-18,y-210/robotics_SQg_ht3Eo.jpeg"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
