import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <div className="fixed inset-0 bg-gray-200 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 m-auto">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-3xl font-light leading-normal">
            Sorry we couldn't find this page.
          </p>
          <p className="mb-8">
            But don't worry, you can find plenty of other things on our
            homepage.
          </p>
          <Link to="/">
            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-ieee-blue hover:bg-ieee-blue-dark">
              Go home
            </button>
          </Link>
        </div>
        <div className="max-w-lg hidden lg:block">
          <StaticImage
            src="../images/sad-cat.webp"
            placeholder="blurred"
            formats={["AUTO", "WEBP", "AVIF"]}
            quality={100}
            alt="Sad Cat"
          />
        </div>
      </div>
    </div>
  </>
)

export default NotFoundPage
