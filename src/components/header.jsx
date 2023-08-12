import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { throttle } from "lodash"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons"

import SideBar from "./sidebar"

const Header = ({ route }) => {
  const [scrollPosition, setScrollPosition] = React.useState(0)
  const [isOpen, setIsOpen] = React.useState(false) // for sidebar

  React.useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 100))

    return () => {
      window.removeEventListener("scroll", throttle(handleScroll, 100))
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

  const DropDown = props => {
    const [active, setActive] = React.useState(false)

    let timeout
    const onEnter = () => {
      setActive(true)
      clearTimeout(timeout)
    }

    const onLeave = () => {
      timeout = setTimeout(() => setActive(false), 300)
    }

    return (
      <>
        <li
          className={`h-full relative mx-2 cursor-pointer border-b-4 ${
            route.startsWith(props.to)
              ? "border-ieee-blue text-ieee-blue"
              : "border-transparent hover:border-ieee-blue hover:text-ieee-blue"
          }`}
          role="none"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <span className="flex items-center h-full">
            <span className="px-3 py-2 text-sm font-medium">{props.title}</span>{" "}
            <span>
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`transition duration-300 transform ${
                  active ? "rotate-180" : ""
                }`}
              />
            </span>
          </span>

          {/* Dropdown here */}
          {active ? (
            <div className="absolute right-0 top-24 w-56 rounded-md shadow-xl bg-white focus:outline-none">
              <div className="py-1">{props.children}</div>
            </div>
          ) : (
            ""
          )}
        </li>
      </>
    )
  }
  DropDown.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }

  const DropDownLink = props => {
    return (
      <Link
        to={props.to}
        className={`block px-4 py-2 text-sm font-medium ${
          route === props.to
            ? "text-ieee-blue"
            : "text-gray-700 hover:text-ieee-blue"
        }`}
      >
        {props.children}
      </Link>
    )
  }
  DropDownLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }

  const Navlinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/chapters">Chapters</NavLink>
      <DropDown to="/e/" title="Registrations">
        <DropDownLink to="https://forms.gle/QbB6wMoxHLS55zGa7">
          Tag It
        </DropDownLink>
        <DropDownLink to=" https://bit.ly/Print-xyz">Print.xyz</DropDownLink>
        <DropDownLink to="https://bit.ly/IEEE_Evidence_Escapade_">
          Evidence Escape
        </DropDownLink>
      </DropDown>
      <NavLink to="/execom">Execom</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/scholorships">Scholarships</NavLink>
      <NavLink to="/register">Join IEEE </NavLink>
    </>
  )

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
            {Navlinks}
          </ul>
        </div>
      </header>

      {/* Header to be displayed first if homepage */}
      {route === "/" ? (
        <header className="absolute top-0 w-full px-6 z-30">
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
              {Navlinks}
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
