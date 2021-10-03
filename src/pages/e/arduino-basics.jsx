import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("KQ4kEiAE", { container: container.current })
  }, [])

  return (
    <Layout route="/e/arduino-basics">
      <Seo
        title="Arduino Basics"
        description="Introduction to Arduino"
        image="https://ik.imagekit.io/ieeeGec/arduino-basic_f9BRKZGPGkC.jpeg?updatedAt=1633271617462"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
