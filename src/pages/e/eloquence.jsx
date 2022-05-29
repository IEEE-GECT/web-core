import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("ZSGjs0SY", { container: container.current })
  }, [])

  return (
    <Layout route="/e/eloquence">
      <Seo
        title="ELOQUENCE"
        description="Expound to Impress"
        image="https://ik.imagekit.io/fnsxnpbnzvj/ieee/WhatsApp_Image_2022-05-29_at_3.03.34_PM__i2iDhNiT.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1653820018055"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
