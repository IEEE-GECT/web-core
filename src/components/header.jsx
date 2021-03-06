import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ title }) => (
  <header className="bg-ieee-blue mb-10 p-7">
    <h1 className="sm:ml-10 text-2xl">
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {title}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
