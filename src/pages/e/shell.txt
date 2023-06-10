import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


const eventdata={
    link:'/e/eventname',
    title:'',
    description:'',
    image:'',
    typeformcode:'',
}

const EventPage = () => {
  const container = React.useRef()
    

  React.useEffect(() => {
    createWidget(eventdata.typeformcode, { container: container.current })
  }, [])

  return (
    <Layout route={eventdata.link}>
      <Seo
        title={eventdata.title}
        description={eventdata.description}
        image={eventdata.image}
        
      />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage