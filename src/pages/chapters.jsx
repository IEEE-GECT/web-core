import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
let chapters = [
  {
    chapid: "1",
    name1: "IEEE",
    name2: "TEMS",
    imgSrc:
      "https://tse2.mm.bing.net/th?id=OIP.aOF0x2AZ9v1tDkPfEvWVsgHaC5&pid=Api&P=0&w=463&h=182",
    description: `    IEEE Technology and Management Society aims at promoting the involvement of managerial
     skills in engineering and technology. It focuses on encouragement of aspiring entrepreneurs and 
     management enthusiasts with the right amount of support in terms of guidance and capital`,
  },
  {
    chapid: "2",
    name1: "IEEE",
    name2: "PES",
    imgSrc:
      "https://tse3.mm.bing.net/th?id=OIP.oWeG9XjWuUqyEptz_qe5kAHaCe&pid=Api&P=0&w=551&h=184",
    description: ` IEEE Power Energy Society is one of the major specific societies under IEEE which focuses on 
    the Power and Energy sector. Additionally, PES focuses on sustainability and researching eco-friendly 
    alternatives to the already existing power solutions.`,
  },
  {
    chapid: "3",
    name1: "IEEE",
    name2: "IAS",
    imgSrc:
      "https://ik.imagekit.io/ieeeGec/tr:w-450,h-250,c-force/ias-new_nY15EeChm.png",
    description: `   IEEE Industry Applications Society specialises in industrial applications and services. 
    It's focuses cover the global design, development, application, and management of electrical and 
    electronic systems, apparatuses, devices, and controls for safe, reliable, and economical processes and equipment of industrial and commercial installations`,
  },
  {
    chapid: "4",
    name1: "IEEE",
    name2: "WIE",
    imgSrc: "https://witi.com/img/logos/ieeewomeninengineering.jpg",
    description: `  IEEE Women in Engineering is an affinity group under the IEEE that
    aims at promoting women's involvement in engineering and technology.
    It's activities focuses on empowering female engineers and researchers
    and providing a platform for them to showcase their very best of talents.`,
  },
  {
    chapid: "5",
    name1: "IEEE",
    name2: "CS",
    imgSrc:
      "https://ik.imagekit.io/ieeeGec/tr:w-500,h-200,c-force/cs_d6ktKY0Eg.png",
    description: `IEEE Computer Society is the exclusive society for advancements in coding, computer 
    science engineering and IT. The Computer Society also  aims at promoting budding computer engineers 
    and aiding them venture out into research in the same.`,
  },
  {
    chapid: "6",
    name1: "IEEE",
    name2: "RAS",
    imgSrc:
      "https://tse1.mm.bing.net/th?id=OIP.9rdwi78qQlSeewmPZqbxrAHaCu&pid=Api&P=0&w=421&h=156",
    description: `  IEEE Robotics and Automation society aims at promoting innovation and development of 
    the robotics sector. Additionally, it aims at bringing more of the budding engineers into robotics and 
    other allied areas ofresearch`,
  },
  {
    chapid: "7",
    name1: "IEEE",
    name2: "ComSoc",
    imgSrc:
      "https://ik.imagekit.io/0ta3q23cu/COMSOC.jpg?updatedAt=1681194395271",
    description: `IEEE Communications Society provides services to members for their technical and
     professional advancement and forums for technical exchanges among professionals in academia, industry, and public
    institutions. Complying with the ComSoc principles, the SB at Government Engineering Colleg Thrissur accelerates
    towards harmony through communications and networking technology research, application, education, and incubation of new ideas.`,
  },
  {
    chapid: "8",
    name1: "IEEE",
    name2: "PELS",
    imgSrc:
      "https://tse3.mm.bing.net/th?id=OIP.OuQkBwlNqc38IrEu6wDnEgHaC8&pid=Api&P=0&w=375&h=149",
    description: `IEEE Power Electronics Society is a society under IEEE specialising in advancements in 
    the power electronics sector. PELS also emphasises on upholding the vital scientific 
    and educational aspects of power electronics and its applications`,
  },
  {
    chapid: "9",
    name1: "IEEE",
    name2: "SIGHT",
    imgSrc:
      "https://ik.imagekit.io/nm1ondc9y/logo-ieee-sight.png?updatedAt=1681575839754",
    description: `  The Special Interest Group on Humanitarian Technology program is a network of IEEE volunteers 
    around the globe that partner with underserved communities and local organizations to leverage technology for
     sustainable development.IEEE SIGHT is a global network of groups consisting of IEEE members and volunteers
      who identify and address local problems by applying their technical skills and partnering with their local communities. `,
  },
  {
    chapid: "10",
    name1: "IEEE",
    name2: "SPS",
    imgSrc:
      "https://ik.imagekit.io/0ta3q23cu/ieeSPS.png?updatedAt=1681194803920",
    description: `     With the mission to "advance and disseminate state-of-the-art scientific information
    and resources; educate the signal processing community; and provide a venue for people 
    to interact and exchange ideas", the SB at GECT serves its members through high quality 
    publications, conferences, technical and educational activities, leadership opportunities
     and to keep its members abreast of the latest information and to serve the public at large
    `,
  },
]

const ChaptersPage = () => (
  <Layout route="/chapters">
    <Seo title="Chapters" />
    {chapters.map(chapter => (
      <div
        key={chapter.chapid}
        className="mx-auto mt-10 bg-white lg:max-w-5xl lg:shadow-lg lg:rounded-lg lg:flex lg:justify-center"
      >
        <div className="p-4 lg:w-1/2">
          <img
            className="h-64 bg-cover lg:rounded-lg lg:h-full"
            src={chapter.imgSrc}
            alt={chapter.name1 + chapter.name2}
          />
        </div>
        <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
          <h2 className="text-4xl text-gray-800 font-bold pb-2 border-b-2 border-gray">
            {chapter.name1}{" "}
            <span className="text-indigo-600">{chapter.name2}</span>
          </h2>
          <p className="mt-4 text-gray-600">{chapter.description}</p>
        </div>
      </div>
    ))}
  </Layout>
)
export default ChaptersPage
