import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout route="/chapters">
    <Seo title="Chapters" />

    <div
      id="soc7"
      className="mx-auto mt-10 bg-white   lg:max-w-5xl lg:shadow-lg lg:rounded-lg lg:flex lg:justify-center"
    >
      <div className="p-4 lg:w-1/2">
        <img
          classname="h-64 bg-cover lg:rounded-lg lg:h-full"
          src="https://tse2.mm.bing.net/th?id=OIP.aOF0x2AZ9v1tDkPfEvWVsgHaC5&pid=Api&P=0&w=463&h=182"
        />
      </div>
      <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
        <h2 className="text-4xl text-gray-800 font-bold pb-2 border-b-2 border-gray">
          IEEE <span class="text-indigo-600">TEMS</span>
        </h2>
        <p className="mt-4 text-gray-600">
          IEEE Technology and Management Society aims at promoting the
          involvement of managerial skills in engineering and technology. It
          focuses on encouragement of aspiring entrepreneurs and management
          enthusiasts with the right amount of support in terms of guidance and
          capital
        </p>
      </div>
    </div>

    {/* 1 */}
    <div
      id="soc1"
      className="mx-auto mt-10 bg-white  lg:max-w-5xl lg:shadow-lg lg:rounded-lg lg:flex lg:justify-center"
    >
      <div className="p-8 lg:w-1/2">
        <img
          classname="h-64 bg-cover lg:rounded-lg lg:h-full"
          src="https://tse3.mm.bing.net/th?id=OIP.oWeG9XjWuUqyEptz_qe5kAHaCe&pid=Api&P=0&w=551&h=184"
        />
      </div>
      <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
        <h2 className=" text-4xl text-gray-800 font-bold pb-2 border-b-2 border-gray ">
          IEEE <span class="text-indigo-600">PES </span>
        </h2>

        <p className="mt-4 text-gray-600">
          IEEE Power Energy Society is one of the major specific societies under
          IEEE which focuses on the Power and Energy sector. Additionally, PES
          focuses on sustainability and researching eco-friendly alternatives to
          the already existing power solutions.
        </p>
      </div>
    </div>
    {/* 2 */}
    <div
      id="soc2"
      className="mx-auto mt-10 bg-white    lg:max-w-5xl lg:shadow-lg lg:rounded-lg lg:flex lg:justify-center"
    >
      <div className="p-8 lg:w-1/2 ">
        <img
          classname="  lg:rounded-lg lg:h-full"
          src="https://witi.com/img/logos/ieeewomeninengineering.jpg"
          width="1400"
          height="1400"
        />
      </div>
      <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
        <h2 className="text-4xl text-gray-800 font-bold pb-2 border-b-2 border-gray">
          IEEE <span class="text-indigo-600">WIE</span>
        </h2>
        <p className="mt-4 text-gray-600">
          IEEE Women in Engineering is an affinity group under the IEEE that
          aims at promoting women's involvement in engineering and technology.
          It's activities focuses on empowering female engineers and researchers
          and providing a platform for them to showcase their very best of
          talents.
        </p>
      </div>
    </div>
    {/* 3 */}
    <div
      id="soc3"
      className="mx-auto mt-10 bg-white    lg:max-w-5xl lg:shadow-lg lg:rounded-lg lg:flex lg:justify-center"
    >
      <div className="pt-10 px-4 lg:w-1/2">
        <img
          classname="h-64 lg:rounded-lg lg:h-full"
          src="https://www.showsbee.com/newmaker/www/u/2020/20201/com_img/IEEE-Computer-Society.png"
        />
      </div>
      <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
        <h2 className="text-4xl text-gray-800 font-bold pb-2 border-b-2 border-gray">
          IEEE <span class="text-indigo-600">CS</span>
        </h2>
        <p className="mt-4 text-gray-600">
          IEEE Computer Society is the exclusive society for advancements in
          coding, computer science engineering and IT. The Computer Society also
          aims at promoting budding computer engineers and aiding them venture
          out into research in the same.
        </p>
      </div>
    </div>
    {/* 4 */}
    <div
      id="soc4"
      className="mx-auto mt-10 bg-white lg:max-w-5xl lg:shadow-lg lg:rounded-lg lg:flex lg:justify-center"
    >
      <div className="p-8 lg:w-1/2">
        <img
          classname="h-64 bg-cover lg:rounded-lg lg:h-full"
          src="https://tse1.mm.bing.net/th?id=OIP.9rdwi78qQlSeewmPZqbxrAHaCu&pid=Api&P=0&w=421&h=156"
        />
      </div>
      <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
        <h2 className="text-4xl text-gray-800 font-bold pb-2 border-b-2 border-gray">
          IEEE <span class="text-indigo-600">RAS</span>
        </h2>
        <p className="mt-4 text-gray-600">
          IEEE Robotics and Automation society aims at promoting innovation and
          development of the robotics sector. Additionally, it aims at bringing
          more of the budding engineers into robotics and other allied areas of
          research
        </p>
      </div>
    </div>
    {/* 5 */}
    <div
      id="soc5"
      className="mx-auto mt-10 bg-white  lg:max-w-5xl lg:shadow-lg lg:rounded-lg lg:flex lg:justify-center"
    >
      <div className="p-8 lg:w-1/2">
        <img
          classname="h-64 bg-cover lg:rounded-lg lg:h-full"
          src="https://tse3.mm.bing.net/th?id=OIP.OuQkBwlNqc38IrEu6wDnEgHaC8&pid=Api&P=0&w=375&h=149"
        />
      </div>
      <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
        <h2 className="text-4xl text-gray-800 font-bold pb-2 border-b-2 border-gray">
          IEEE <span class="text-indigo-600">PELS</span>
        </h2>
        <p className="mt-4 text-gray-600">
          IEEE Power Electronics Society is a society under IEEE specialising in
          advancements in the power electronics sector. PELS also emphasises on
          upholding the vital scientific and educational aspects of power
          electronics and its applications
        </p>
      </div>
    </div>
    {/* 6 */}
    <div
      id="soc6"
      className="mx-auto mt-10 bg-white   lg:max-w-5xl lg:shadow-lg lg:rounded-lg lg:flex lg:justify-center"
    >
      <div className="p-4 lg:w-1/2">
        <img
          classname="h-64 bg-cover lg:rounded-lg lg:h-full"
          src="http://sites.ieee.org/nicaragua/files/2011/05/Logo-IAS.png"
        />
      </div>
      <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
        <h2 className="text-4xl text-gray-800 font-bold pb-2 border-b-2 border-gray">
          IEEE <span class="text-indigo-600">IAS</span>
        </h2>
        <p className="mt-4 text-gray-600">
          IEEE Industry Applications Society specialises in industrial
          applications and services. It's focuses cover the global design,
          development, application, and management of electrical and electronic
          systems, apparatuses, devices, and controls for safe, reliable, and
          economical processes and equipment of industrial and commercial
          installations
        </p>
      </div>
    </div>
    {/* 7 */}
  </Layout>
)

export default IndexPage
