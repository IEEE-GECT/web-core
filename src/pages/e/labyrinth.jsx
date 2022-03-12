import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("Y08zVZ3c", { container: container.current })
  }, [])

  return (
    <Layout route="/e/labyrinth">
      <Seo
        title="Labyrinth"
        description="Pi Day Celebration"
        image="https://ik.imagekit.io/ieeecollege/IMG_20220312_163315_004_m5tTXeBHd.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647083064292&tr=w-1080%2Ch-1080%2Cfo-auto"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
