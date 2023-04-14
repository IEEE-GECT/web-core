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
    <Layout route="/e/agm23">
      <Seo
        title="Annual General Meeting 2023"
        description=""
        image="https://ik.imagekit.io/nm1ondc9y/agm_23.jpg?updatedAt=1681446616993"
        
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage

