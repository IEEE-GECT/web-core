import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("-------", { container: container.current })
  }, [])

  return (
    <Layout route="/e/visionQuest">
      <Seo
        title="Vision Quest"
        description="Anna Thomas, Co-Founder, COO, Luova Foundation | Entrepreneur |Developer | Designer "
        image="https://ik.imagekit.io/nm1ondc9y/vision_quest.jpg?updatedAt=1681446615460"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
