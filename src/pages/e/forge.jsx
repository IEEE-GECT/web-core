import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("qC7vpjY4", { container: container.current })
  }, [])

  return (
    <Layout route="/e/forge">
      <Seo
        title="Forge | Valaista"
        description="3D printing training session"
        image="https://ik.imagekit.io/ieeeGec/tr:w-1026,h-1026,cm-extract,x-33,y-135/3dprinting3_q1pEAHkuH.jpg"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
