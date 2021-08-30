import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("QZd0Xv4A", { container: container.current })
  }, [])

  return (
    <Layout route="/e/aurea">
      <Seo
        title="AuRea | Valaista"
        description="Doorstep to Augmented Reality"
        image="https://ik.imagekit.io/ieeeGec/aurea-meta_2McEyKqxY?updatedAt=1630324540763"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
