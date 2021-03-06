import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      {/* <div className="fixed inset-0 bg-ieee-blue"></div> For any full screen background */}
      <div className="relative">
        <Header />
        <div className="flex flex-col z-0 pt-20">
          <div className="text-center flex-grow">
            <main>{children}</main>
          </div>
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
