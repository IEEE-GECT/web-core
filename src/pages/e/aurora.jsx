import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("j2J77UnV", { container: container.current })
  }, [])

  return (
    <Layout route="/e/aurora">
      <Seo
        title="Aurora | Valaisata"
        description="A space colloquy | The journey begins here from among the celestial bodies."
        image="https://ik.imagekit.io/ieeeGec/tr:w-951,h-951,cm-extract,x-33,y-154/aurora_ObSZYsl6i.jpeg"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
