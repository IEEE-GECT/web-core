import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("z4Sbjk6E", { container: container.current })
  }, [])

  return (
    <Layout route="/register">
      <Seo
        title="IEEE Membership Form"
        description="Join IEEE Now!"
        
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
