import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("uaWu19so", { container: container.current })
  }, [])

  return (
    <Layout route="/e/circuitex">
      <Seo
        title="Circuitex"
        description="Circuit Debugging Competition | Power Up event series"
        image="https://ik.imagekit.io/0ta3q23cu/events/circuitex.jpg?updatedAt=1681476878703"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage