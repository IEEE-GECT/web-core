import * as React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons"

import Header from "./header"

const Layout = ({ children }) => {
  const GoToTop = () => {
    return (
      <button
        className="fixed right-4 md:right-6 bottom-6 md:bottom-8 rounded-full p-6 bg-ieee-blue focus:outline-none shadow-lg"
        aria-label="Go-to-top"
        onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
      >
        <div className="relative w-full">
          <div className="absolute text-3xl text-white transform -translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faAngleDoubleUp} />
          </div>
        </div>
      </button>
    )
  }
  return (
    <>
      {/* For any full screen background */}
      {/* <div className="fixed inset-0 bg-ieee-blue"></div> */}

      <div className="relative">
        <Header />

        <div className="flex flex-col z-0 pt-20">
          <div className="text-center flex-grow">
            <main>{children}</main>
          </div>

          <GoToTop />
          <footer className="p-3 text-center bg-gray-100 w-full">
            © {new Date().getFullYear()}, IEEE GEC Thrissur
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
