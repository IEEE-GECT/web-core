import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("SGbJAyHS", { container: container.current })
  }, [])

  return (
    <Layout route="/e/decifrare">
      <Seo
        title="DECIFRARE"
        description="PES Day Event"
        image="https://ik.imagekit.io/fnsxnpbnzvj/ieee/photo_2022-04-26_20-50-41_mB3Hl0NN0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650986518363"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
