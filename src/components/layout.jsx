import * as React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons"
import { tsParticles } from "tsparticles"

import Header from "./header"
import tsParticlesConfig from "./tsparticles.config"
import Footer from "./footer"

const Layout = ({ route, children }) => {
  React.useEffect(() => {
    tsParticles
      .load("tsparticles", tsParticlesConfig)
      .then()
      .catch(error => {
        console.error(error)
      })

    const resize = () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }
    resize()
  }, [])

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
      <div
        className="fixed inset-0"
        id="tsparticles"
        style={{ backgroundColor: "aliceblue" }}
      ></div>

      <div className="relative">
        <Header route={route} />

        <div className="flex flex-col z-0 pt-20">
          <div className="text-center flex-grow">
            <main>{children}</main>
          </div>

          <GoToTop />
          {/* <footer className="p-3 text-center bg-gray-100 w-full">
            © {new Date().getFullYear()}, IEEE GEC Thrissur
          </footer> */}
          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  route: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
