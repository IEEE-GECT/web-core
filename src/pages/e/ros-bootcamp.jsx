import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("fGL9SIfi", { container: container.current })
  }, [])

  return (
    <Layout route="/e/ros-bootcamp">
      <Seo
        title="ROS BOOTCAMP"
        description="7 day ROS Bootcamp"
        image="https://ik.imagekit.io/fnsxnpbnzvj/ieee/photo_2022-04-23_16-31-00_vUCznDd-dO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650711685256"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
