import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("VyF68JTX", { container: container.current })
  }, [])

  return (
    <Layout route="/e/educe">
      <Seo
        title="Educe"
        description="In Association with Research Team"
        image="https://ik.imagekit.io/ieeecollege/educe_final_ZW9-xsdAo.jpg?tr=w-1080,h-1080,fo-auto"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
