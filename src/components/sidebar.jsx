import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const SideBar = props => {
  const [display, setDisplay] = React.useState(false)

  const closeSideBar = () => {
    setDisplay(false)
    window.setTimeout(() => props.setIsOpen(false), 500)
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

  const ActiveLink = props => (
    <span
      className={
        "flex items-center py-2 px-8 mt-5 w-full cursor-pointer bg-ieee-blue-light text-ieee-blue border-l-4 border-ieee-blue"
      }
    >
      <span className="mx-4 font-medium block">{props.children}</span>
    </span>
  )

  const IdleLink = props => (
    <span
      className={
        "flex items-center py-2 px-8 mt-5 w-full cursor-pointer text-gray-600 border-l-4 border-white hover:bg-ieee-blue-light hover:text-ieee-blue hover:border-ieee-blue"
      }
    >
      <span className="mx-4 font-medium block">{props.children}</span>
    </span>
  )

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-0 transition-opacity duration-500 z-40"
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
          <ActiveLink>Link1</ActiveLink>

          <IdleLink>Link2</IdleLink>

          <IdleLink>Link3</IdleLink>

          <IdleLink>Link4</IdleLink>

          <IdleLink>Link5</IdleLink>
        </nav>
      </div>
    </>
  )
}

export default SideBar
