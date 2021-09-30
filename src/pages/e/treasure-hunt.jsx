import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("PFYvpTfG", { container: container.current })
  }, [])

  return (
    <Layout route="/e/treasure-hunt">
      <Seo
        title="Needle In A Haystack"
        description="Treasure Hunt"
        image="https://ik.imagekit.io/ieeeGec/4-01_eV10TFVNH.png?updatedAt=1632986520314"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
