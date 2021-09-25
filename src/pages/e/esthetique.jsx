import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("u5LOGTvU", { container: container.current })
  }, [])

  return (
    <Layout route="/e/esthetique">
      <Seo
        title="Esthetique"
        description="UI designing competition"
        image="https://ik.imagekit.io/ieeeGec/esthetique_Rzw2WEQ_j.jpg?updatedAt=1632581218431&tr=w-581,h-581,fo-custom,cm-extract"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
