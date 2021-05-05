import * as React from "react"
import Cardgame, {event} from "../components/events.component"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ShopCard from "../components/shoppingcard.component"
import UikitCard from "../components/uikit-card.component"

const IndexPage = () => (
  <Layout route="/link1">
    <Seo title="Link 1" />

    <div className="pt-10 pb-5 px-2 sm:px-10">
      <p className="py-72 bg-white rounded-lg shadow-2xl">
        Content
        <span role="img" aria-label="partying-face">
          🥳
        </span>
        <span role="img" aria-label="partying-face">
          🥳
        </span>
        <span role="img" aria-label="smiling-face-with-halo">
          😇
        </span>
      </p>
    </div>

    <div className="pt-5 pb-10 px-2 sm:px-10">
      <p className="py-72 bg-white rounded-lg shadow-2xl">
        Content
        <span role="img" aria-label="partying-face">
          🥳
        </span>
        <span role="img" aria-label="partying-face">
          🥳
        </span>
        <span role="img" aria-label="smiling-face-with-halo">
          😇
        </span>
      </p>
    </div>

    <div className="pt-10 pb-5 px-2 sm:px-10">
      <div className="rounded-lg shadow-2xl glass-effect ">
      <div className='ml-4 place-self-center'>
        <Cardgame/>
      </div>
      </div>
    </div>


        <div className="max-w-7xl justify-center">
          <UikitCard/>
        </div>

    <div className="grid grid-cols-2 self-center"><UikitCard/></div>

    <ShopCard/>
    <UikitCard/>

  </Layout>

)

export default IndexPage
