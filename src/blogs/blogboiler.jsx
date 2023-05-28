import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"



let blogdata={
    title:"How A Touch Display Works",
    description:"IEEE SB GECBH is a student branch of IEEE, the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE SB GECBH is a vibrant community of budding engineers striving for the betterment of the society. The student branch has been a pioneer in conducting various technical and non-technical events in the campus. The student branch has been a pioneer in conducting various technical and non-technical events in the campus. The student branch has been a pioneer in conducting various technical and non-technical events in the campus. The student branch has been a pioneer in conducting various technical and non-technical events in the campus. The student branch has been a pioneer in conducting various technical and non-technical events in the campus.",
    image:"https://ik.imagekit.io/ieeeGec/enshrine_c4A2eLU1E.jpg?tr=w-1080,h-1080,fo-auto",
    link:"/blog/how-a-touch-displays-works",
}

const blogpost = () => (
  <Layout route={blogdata.link}>
    <Seo
      title={blogdata.title}
      image={blogdata.image}
    />
    <div className="pt-5 pb-10 px-2 sm:px-10">
      <div className="rounded-lg shadow-2xl glass-effect">
        <div className="postheading"><h1>{blogdata.title}</h1></div>
      </div>
    </div>
  </Layout>
)

export default blogpost
