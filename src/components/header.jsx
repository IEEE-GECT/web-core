import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import SideBar from "./sidebar"

const Header = ({ route }) => {
  const [scrollPosition, setScrollPosition] = React.useState(0)
  const [isOpen, setIsOpen] = React.useState(false) // for sidebar

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  const NavLink = props => {
    return (
      <>
        {route === props.to ? (
          <li className="h-full mx-2 border-b-4 border-ieee-blue text-ieee-blue">
            <Link to={props.to} className="flex items-center h-full">
              <span className="px-3 py-2 text-sm font-medium">
                {props.children}
              </span>
            </Link>
          </li>
        ) : (
          <li className="h-full mx-2 border-b-4 border-transparent hover:border-ieee-blue hover:text-ieee-blue">
            <Link to={props.to} className="flex items-center h-full">
              <span className="px-3 py-2 text-sm font-medium">
                {props.children}
              </span>
            </Link>
          </li>
        )}
      </>
    )
  }
  NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }

  return (
    <>
      {/* Sidebar */}
      {isOpen ? <SideBar route={route} setIsOpen={setIsOpen} /> : ""}

      {/* Header to be displayed after 100px */}
      <header
        className={`bg-white fixed w-full shadow rounded-b-lg px-6 z-30 transition-transform duration-500 ${
          route === "/" ? "-top-40" : "top-0"
        }`}
        style={
          route === "/" && scrollPosition > 100
            ? { transform: "translate(0, 10rem)" }
            : {}
        }
      >
        <div className="flex justify-between">
          <h1 className="sm:ml-10 text-2xl my-4">
            <Link to="/">
              <div className="pt-1 w-40 md:w-48">
                <StaticImage
                  src="../images/logo-blue.png"
                  quality={100}
                  placeholder="tracedSVG"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="logo"
                />
              </div>
            </Link>
          </h1>

          {/* Sidebar button before md */}
          {!isOpen ? (
            <div className="flex items-center">
              <button
                className="px-3 py-1.5 text-2xl rounded-lg border-2 text-ieee-blue hover:text-white transition-colors border-ieee-blue hover:bg-ieee-blue focus:outline-none md:hidden"
                aria-label="Toggle-sidebar"
                onClick={() => setIsOpen(true)}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          ) : (
            ""
          )}

          {/* Links displayed after md */}
          <ul className="hidden md:flex text-gray-800 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/chapters">Chapters</NavLink>
            <NavLink to="/execom">Execom</NavLink>
            <NavLink to="/e/rural-la-carte">Rural la carte</NavLink>
            <NavLink to="/e/wordsworld">Wordsworld</NavLink>
          </ul>
        </div>
      </header>

      {/* Header to be displayed first if homepage */}
      {route === "/" ? (
        <header className="bg-black bg-opacity-0 absolute top-0 w-full px-6 z-30">
          <div className="flex justify-between">
            <h1 className="sm:ml-10 text-2xl my-4">
              <Link to="/">
                <div className="pt-1 w-40 md:w-48">
                  <StaticImage
                    src="../images/logo-white.png"
                    quality={100}
                    placeholder="tracedSVG"
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="logo"
                  />
                </div>
              </Link>
            </h1>

            {/* Sidebar button before md */}
            {!isOpen ? (
              <div className="flex items-center">
                <button
                  className="px-3 py-1.5 text-2xl rounded-lg border-2 text-white hover:text-black transition-colors border-white hover:bg-white focus:outline-none md:hidden"
                  aria-label="Toggle-sidebar"
                  onClick={() => setIsOpen(true)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
            ) : (
              ""
            )}

            {/* Links displayed after md */}
            <ul className="hidden md:flex text-white items-center">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/chapters">Chapters</NavLink>
              <NavLink to="/execom">Execom</NavLink>
              <NavLink to="/e/rural-la-carte">Rural la carte</NavLink>
              <NavLink to="/e/wordsworld">Wordsworld</NavLink>
            </ul>
          </div>
        </header>
      ) : (
        ""
      )}
    </>
  )
}

export default Header
