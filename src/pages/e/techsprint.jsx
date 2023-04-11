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
        title="Tech Sprint"
        description="Vaishak, Hardware Design Engineer at BTL India PVT. LTD. | Technical Event Series"
        image="https://ik.imagekit.io/0ta3q23cu/techsprintcard.jpg?updatedAt=1681216118554"
        
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage