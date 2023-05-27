import * as React from "react"


const HomeAboutUs = () =>(
        <div className="pt-5 pb-10 px-2 sm:px-10">
        <div className="rounded-lg shadow-2xl glass-effect">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                <div className="w-full sm:p-4 px-4 mb-6">
                  <h1 className="title-font font-medium text-3xl mb-4 text-gray-900">
                    About Us
                  </h1>
                  <div className="leading-relaxed text-justify text-medium">
                    Ever since it's inception,the IEEE SB GECT has always been a
                    very active presence in the institution. Being the very first
                    technical society student branch of the institution, the SB
                    has played a very vital and crucial role in the development of
                    research and technology in the institution. The SB has evolved
                    into being accommodative of all fields of interests apart from
                    science and technology. As amazing as it's past,the SB
                    continues to be one of the top tier SBs of the IEEE Kerala
                    Section, courtesy to it's consistently top-notch activities!!
                  </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    212
                  </h2>
                  <p className="leading-relaxed">Active Members</p>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    8
                  </h2>
                  <p className="leading-relaxed">Societies</p>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    35
                  </h2>
                  <p className="leading-relaxed">Awards</p>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    200+
                  </h2>
                  <p className="leading-relaxed">Events</p>
                </div>
              </div>
              <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                <img
                  className="object-cover object-center w-full h-full"
                  src="https://ik.imagekit.io/ieeeGec/about_v0_w_uFn4.png"
                  alt="stats"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
)
export default HomeAboutUs;