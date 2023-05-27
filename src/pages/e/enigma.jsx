import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("yZHXZVzv", { container: container.current })
  }, [])

  return (
    <Layout route="/e/techsprint">
      <Seo
        title="Enigma"
        description="Enigma, Technical Event Series"
        image="https://ik.imagekit.io/nm1ondc9y/enigma.png?updatedAt=1685192203489"
        
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage