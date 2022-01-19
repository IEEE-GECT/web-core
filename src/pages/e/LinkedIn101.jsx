import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("nildG7BY", { container: container.current })
  }, [])

  return (
    <Layout route="/e/LinkedIn101">
      <Seo
        title="LinkedIn 101"
        description="Know where to start"
        image="https://ik.imagekit.io/ieeeGec/LinkedIn__1__PsDQ0m5VutC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642605392157&tr=w-1080%2Ch-1080%2Cfo-auto"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
