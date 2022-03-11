import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("N0IVBxgC", { container: container.current })
  }, [])

  return (
    <Layout route="/e/volunteer-call">
      <Seo
        title="Volunteer Call"
        description="Design/Content Team Volunteer Call"
        image="https://ik.imagekit.io/ieeecollege/VCallWeb_vtmKq2iYg4cyo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646998582371&tr=w-1080%2Ch-1080%2Cfo-auto"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
