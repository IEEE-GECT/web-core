import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("ymrIp2wg", { container: container.current })
  }, [])

  return (
    <Layout route="/e/zero2neuro">
      <Seo
        title="Zero to Neuro with Pytorch"
        description="Machines are learning, are you? | Workshop"
        image="https://ik.imagekit.io/ieeeGec/pytorch-workshop_mlvGaXfxx.jpeg?tr=w-1080,h-1080,fo-auto"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
