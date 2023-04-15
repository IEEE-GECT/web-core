import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a href="/" aria-label="Go home" className="inline-flex items-center">
            <StaticImage
              src="../images/logo-blue.png"
              quality={100}
              width={160}
              placeholder="tracedSVG"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="logo"
            />
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Thank you for checking us out, hope we could be of help. Please do
              feel free to contact us for any queries that you may have. Looking
              forward to seeing you again!!
            </p>

            <p className="mt-4 text-sm text-gray-800">
              Government Engineering College
            </p>
            <p className="text-sm text-gray-800">
              Thrissur - 680 009, Kerala, India
            </p>
            <p className="text-sm text-gray-800">
              Email:{" "}
              <a href="mailto:ieeesb@gectcr.ac.in">ieeesb@gectcr.ac.in</a>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 lg:ml-10 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Quik Links
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://www.ieee.org/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  IEEE.org
                </a>
              </li>
              <li>
                <a
                  href="https://ieeexplore.ieee.org/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  IEEE Xplore
                </a>
              </li>
              <li>
                <a
                  href="https://ieee-collabratec.ieee.org/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  IEEE Collabratec
                </a>
              </li>
              <li>
                <a
                  href="http://spectrum.ieee.org/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  IEEE Spectrum Online
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Membership
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://www.ieee.org/membership/join/index.html"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Join IEEE
                </a>
              </li>
              <li>
                <a
                  href="https://www.ieee.org/membership-catalog/societies.html?N=4294925302"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Join a Society
                </a>
              </li>
              <li>
                <a
                  href="https://www.ieee.org/membership/renew.html"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Renew Membership
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800 ">
              Societies
            </p>
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <ul className="mt-2 space-y-2">
                <li>
                    <Link
                      to="/chapters/#soc1"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      PES
                    </Link>
                  </li>   
             
             
                  <li>
                    <Link
                      to="/chapters/#soc3"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      CS
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-start-3 col-span-1">
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      to="/chapters/#soc4"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      RAS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/chapters/#soc5"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      PELS
                    </Link>
                  </li>
                  <li>
                    <LinkS
                      to="/chapters/#soc6"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      IAS
                    </LinkS>
                  </li>
                  <li>
                    <Link
                      to="/chapters/#soc7"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      TEMS
                    </Link>
                  </li>     
                  <li>
                    <Link
                      to="/chapters/#soc8"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      ComSoc
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/chapters/#soc9"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      SPS
                    </Link>
                  </li>
            
                </ul>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold tracking-wide text-gray-800 ">
            Affinity And Special Intrest Group
            </p>
            <div className="grid grid-cols-1">
              <div className="col-span-1">
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      to="/chapters/#soc2"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                      WIE
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/chapters/#soc5"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      SIGHT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-600">
          Developed and Designed by IEEE GECT
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <a
            href="https://www.linkedin.com/in/ieee-sb-gec-thrissur-9b93041a8/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/ieeesbgect/"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4" />
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/ieeesbgectcr/"
            aria-label="Facebook"
            targe="_blank"
            rel="noreferrer"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
