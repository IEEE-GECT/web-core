import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("itsW0kBV", { container: container.current })
  }, [])

  return (
    <Layout route="/e/inceptio">
      <Seo
        title="Inceptio"
        description="Freshers"
        image="https://ik.imagekit.io/ieeecollege/INCEPTIO_I-UKN89y0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646147485406&tr=w-1080%2Ch-1080%2Cfo-auto"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
