import * as React from "react"
import Cardgame, {event} from "../components/events.component"
import CardOne from "../components/ex/c1"
import Form1 from "../components/forms/form1.component"
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

    <div className="object-center"><UikitCard/></div>

    <div className="pt-10 pb-5 px-2 sm:px-10 object-center">
      <div className="rounded-lg shadow-2xl ">
      
      <UikitCard/>
      
      </div>
    </div>

    <ShopCard/>
    <UikitCard/>
    <CardOne></CardOne>
    <div>
    <iframe id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/mYRWPPsq?typeform-medium=embed-snippet"></iframe>
    </div>

  </Layout>
  

)

export default IndexPage
