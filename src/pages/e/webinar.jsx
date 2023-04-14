import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("-------", { container: container.current })
  }, [])

  return (
    <Layout route="/e/webinar">
      <Seo
        title="Webinar on LinkedIn Jobs and IEEE"
        description="Vishnu S, head of content at tal64 | Technical Event Series"
        image="https://ik.imagekit.io/nm1ondc9y/webinar_on_linked_in_jobs_and_ieee.jpg?updatedAt=1681446615217"
        
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage