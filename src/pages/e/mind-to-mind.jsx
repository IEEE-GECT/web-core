import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("BHX5ZgQu", { container: container.current })
  }, [])

  return (
    <Layout route="/e/mind-to-mind">
      <Seo
        title="Mind to Mind | Mentoring Programme"
        description="In alliance with Alumni GECT"
        image="https://ik.imagekit.io/ieeeGec/tr:w-1054,h-1054,cm-extract,x-16,y-137/mind-to-mind2_HQTWLd8Wi.jpg"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
