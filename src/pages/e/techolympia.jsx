import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("WBUR2Omg", { container: container.current })
  }, [])

  return (
    <Layout route="/e/techolympia">
      <Seo
        title="Techolympia"
        description="Making Sports Better with Technology"
        image="https://ik.imagekit.io/ieeeGec/techolympia_EwutoEoLUGT.jpeg?updatedAt=1633270951689"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
