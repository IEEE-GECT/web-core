import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("QgkSdafm", { container: container.current })
  }, [])

  return (
    <Layout route="/e/jam">
      <Seo
        title="J.A.M"
        description="Science Week Celebration | JAM "
        image="https://ik.imagekit.io/ieeecollege/science_week2024_lYfOB1e_T.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646729012244&tr=w-1080%2Ch-1080%2Cfo-auto"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
