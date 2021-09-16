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
    <Layout route="/e/Level-up">
      <Seo
        title="Level Up"
        description="Xtreme Mock Test Series"
        image="https://ik.imagekit.io/ieeeGec/levelup2_D3RgmmD6IP.jpg?updatedAt=1631805477404"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
