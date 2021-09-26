import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("HW0UQls2", { container: container.current })
  }, [])

  return (
    <Layout route="/e/mind-bender">
      <Seo
        title="Mind Bender"
        description="Crossword competition"
        image="https://ik.imagekit.io/ieeeGec/mind-bender_W6fXZNLPKqh?updatedAt=1632657084494"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
