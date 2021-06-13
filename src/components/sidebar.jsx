import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faCaretDown } from "@fortawesome/free-solid-svg-icons"

const SideBar = ({ route, setIsOpen }) => {
  const [display, setDisplay] = React.useState(false)

  const closeSideBar = () => {
    setDisplay(false)
    window.setTimeout(() => setIsOpen(false), 500)
  }

  React.useEffect(() => {
    setDisplay(true)

    const checkKey = e => {
      if (e.key === "Escape") closeSideBar()
    }
    document.addEventListener("keydown", checkKey)

    return () => document.removeEventListener("keydown", checkKey)
    // eslint-disable-next-line
  }, [])

  const NavLink = props => {
    return (
      <>
        {route === props.to ? (
          <span
            className={
              "flex items-center py-2 px-8 mt-5 w-full cursor-pointer bg-ieee-blue-light text-ieee-blue border-l-4 border-ieee-blue"
            }
          >
            <Link to={props.to} className="block w-full">
              <span className="mx-4 font-medium block">{props.children}</span>
            </Link>
          </span>
        ) : (
          <span
            className={
              "flex items-center py-2 px-8 mt-5 w-full cursor-pointer text-gray-600 border-l-4 border-white hover:bg-ieee-blue-light hover:text-ieee-blue hover:border-ieee-blue"
            }
          >
            <Link to={props.to} className="block w-full">
              <span className="mx-4 font-medium block">{props.children}</span>
            </Link>
          </span>
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

    return (
      <>
        <span
          className={`flex items-center py-2 px-8 mt-5 w-full cursor-pointer ${
            route.startsWith(props.to)
              ? "bg-ieee-blue-light text-ieee-blue border-l-4 border-ieee-blue"
              : "text-gray-600 border-l-4 border-white hover:bg-ieee-blue-light hover:text-ieee-blue hover:border-ieee-blue"
          } `}
        >
          <li
            className="block w-full"
            role="none"
            onClick={() => setActive(!active)}
          >
            <span className="flex items-center h-full">
              <span className="mx-4 font-medium block">{props.title}</span>{" "}
              <span>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={`transition duration-300 transform ${
                    active ? "rotate-180" : ""
                  }`}
                />
              </span>
            </span>
          </li>
        </span>

        {/* Dropdown here */}
        {active ? <div className="w-full">{props.children}</div> : ""}
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
        className={`block pl-16 py-2 text-sm font-medium ${
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

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-0 transition-opacity duration-500 z-40 md:hidden"
        style={display ? { opacity: 0.6 } : {}}
      ></div>
      <div
        className={
          "w-56 sm:w-64 bg-white fixed top-0 bottom-0 -right-64 overflow-auto z-50 transition-transform duration-500 md:hidden"
        }
        style={display ? { transform: "translate(-16rem, 0)" } : {}}
      >
        <div className="px-6 py-4 w-100 text-right">
          <button
            className="px-3 py-1.5 text-2xl rounded-lg border-2 text-ieee-blue hover:text-white transition-colors border-ieee-blue hover:bg-ieee-blue focus:outline-none md:hidden"
            onClick={() => closeSideBar()}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/chapters">Chapters</NavLink>
          <DropDown to="/valaista" title="Valaista">
            <DropDownLink to="/valaista">Home Page</DropDownLink>
            <DropDownLink to="/e/inauguration">Inauguration</DropDownLink>
          </DropDown>
          <DropDown to="/e/" title="Registrations">
            <DropDownLink to="/e/postermaking">Poster Making</DropDownLink>
            <DropDownLink to="/e/articlewriting">Article Writing</DropDownLink>
            <DropDownLink to="/e/know-your-society">
              Know your Society
            </DropDownLink>
          </DropDown>
          <NavLink to="/execom">Execom</NavLink>
          <NavLink to="/half-year-registration">Half Year Registration</NavLink>
        </nav>
      </div>
    </>
  )
}

export default SideBar
