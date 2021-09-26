import * as React from "react"
// import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EventPage = () => {
  // const container = React.useRef()

  // React.useEffect(() => {
  //   createWidget("j2J77UnV", { container: container.current })
  // }, [])

  return (
    <Layout route="/e/aurora">
      <Seo
        title="Aurora | Valaisata"
        description="A space colloquy | The journey begins here from among the celestial bodies."
        image="https://ik.imagekit.io/ieeeGec/tr:w-951,h-951,cm-extract,x-33,y-154/aurora_ObSZYsl6i.jpeg"
      />

      <div className="pt-10 pb-5 px-2 sm:px-10">
        <div className="rounded-lg shadow-2xl glass-effect">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto sm:py-16">
              <div className="flex justify-center align-center ">
                <img
                  src="https://ik.imagekit.io/ieeeGec/Event-1-poster-final-CLOSED_vVDxw5qcQ.jpg"
                  alt="Registration Closed"
                  style={{ maxHeight: "720px" }}
                  className
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default EventPage
