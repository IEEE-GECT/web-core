import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("CJZYlgcq", { container: container.current })
  }, [])

  return (
    <Layout route="/e/construe">
      <Seo
        title="Construe"
        description="Decoding competition"
        image="https://ik.imagekit.io/ieeecollege/construe_Nf-Y9fRPE.jpg?updatedAt=1632838231992&tr=w-1080,h-1080,fo-auto"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
