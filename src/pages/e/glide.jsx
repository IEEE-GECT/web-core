import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("P8WnTlCZ", { container: container.current })
  }, [])

  return (
    <Layout route="/e/glide">
      <Seo
        title="Glide | Valaista"
        description="Workshop on Drone Technology"
        image="https://ik.imagekit.io/ieeeGec/drone-sq_MoXsdZcPR?updatedAt=1629461983619"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
