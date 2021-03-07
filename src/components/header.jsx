import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Header to be displayed after 100px */}
      <header
        className="bg-white fixed -top-40 w-full shadow rounded-b-lg p-6 z-50 transition-transform"
        style={scrollPosition > 100 ? { transform: "translate(0, 10rem)" } : {}}
      >
        <div className="flex justify-between">
          <h1 className="sm:ml-10 text-2xl">
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <div className="text-ieee-blue w-48">
                <StaticImage
                  src="../images/logo-blue.png"
                  quality={100}
                  placeholder="blurred"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="logo"
                />
              </div>
            </Link>
          </h1>
          <ul className="text-gray-800 flex self-center">
            <li>
              <span className="px-4 py-2 text-sm font-medium cursor-pointer">
                Link 1
              </span>
            </li>
            <li>
              <span className="px-4 py-2 text-sm font-medium cursor-pointer">
                Link 2
              </span>
            </li>
            <li>
              <span className="px-4 py-2 text-sm font-medium cursor-pointer">
                Link 3
              </span>
            </li>
            <li>
              <span className="px-4 py-2 text-sm font-medium cursor-pointer">
                Link 4
              </span>
            </li>
            <li>
              <span className="px-4 py-2 text-sm font-medium cursor-pointer">
                Link 5
              </span>
            </li>
          </ul>
        </div>
      </header>

      {/* Header to be displayed first */}
      <header className="bg-black bg-opacity-0 absolute top-0 w-full p-6 z-50">
        <div className="flex justify-between">
          <h1 className="sm:ml-10 text-2xl">
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <div className="text-ieee-blue w-48">
                <StaticImage
                  src="../images/logo-white.png"
                  quality={100}
                  placeholder="blurred"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="logo"
                />
              </div>
            </Link>
          </h1>
          <ul className="text-white flex self-center">
            <li>
              <span className="px-4 py-2 text-sm font-medium cursor-pointer">
                Link 1
              </span>
            </li>
            <li>
              <span className="px-4 py-2 text-sm font-medium cursor-pointer">
                Link 2
              </span>
            </li>
            <li>
              <span className="px-4 py-2 text-sm font-medium cursor-pointer">
                Link 3
              </span>
            </li>
            <li>
              <span className="px-4 py-2 text-sm font-medium cursor-pointer">
                Link 4
              </span>
            </li>
            <li>
              <span className="px-4 py-2 text-sm font-medium cursor-pointer">
                Link 5
              </span>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
