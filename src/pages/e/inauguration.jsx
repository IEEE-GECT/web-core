import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("fgKP3j3z", { container: container.current })
  }, [])

  return (
    <Layout route="/e/inauguration">
      <Seo
        title="Valaista Inauguration"
        description="Dr. K Radhakrishnan, Former ISRO Chairmain | Technical Event Series"
        image="https://ik.imagekit.io/ieeeGec/tr:w-942,h-942,cm-extract,x-15,y-166/rkrishnansir-final_psAghAhM3.jpeg"
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage
