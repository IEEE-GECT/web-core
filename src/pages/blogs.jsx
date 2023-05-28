import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/blogs.css'

let blogposts=[
    {
        title:"How A Touch Display Works",
        description:"IEEE SB GECBH is a student branch of IEEE, the world's largest technical professional organization  the world's largest technical professional organization the world's largest technical professional organization",
        image:"https://ik.imagekit.io/ieeeGec/enshrine_c4A2eLU1E.jpg?tr=w-1080,h-1080,fo-auto",
        link:"/blog/how-a-touch-displays-works",
    },
        {
        title:"How A Touch Display Works",
        description:"IEEE SB GECBH is a student branch of IEEE, the world's largest technical professional organization the world's largest technical professional organization the world's largest technical professional organization",
        image:"https://ik.imagekit.io/ieeeGec/enshrine_c4A2eLU1E.jpg?tr=w-1080,h-1080,fo-auto",
        link:"/blog/how-a-touch-displays-works",
    },
        {
        title:"How A Touch Display Works",
        description:"IEEE SB GECBH is a student branch of IEEE, the world's largest technical professional organization the world's largest technical professional organization the world's largest technical professional organization",
        image:"https://ik.imagekit.io/ieeeGec/enshrine_c4A2eLU1E.jpg?tr=w-1080,h-1080,fo-auto",
        link:"/blog/how-a-touch-displays-works",
    },
]

const BlogPage = () => (
  <Layout route="/blogs">
    <Seo
      title="blogs"
      image="https://8s9ot3736652r3v5s22dfc81-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Consensus-Kills-Business-Innovation-600x315-cropped.jpg"
    />

    <div className="pt-5 pb-10 px-2 sm:px-10">
      <div className="rounded-lg shadow-2xl glass-effect">
        <h1 className="h1" >blogs</h1>
        <div className="blogcarousel">
       { blogposts.map((blogpost)=>{
        return (
            <div className="blogcard">
                <img className="blogcardimage" src={blogpost.image} alt={blogpost.title} />                  
                <div className="blogpostcontent">
                    <h2 className="blogheading">{blogpost.title}</h2>
                    <p className="blogdescription">{blogpost.description}</p>
                    <a className="readmorebtn" href={blogpost.link}>Read More</a>
                    </div>
                    </div>
        )
        })}
</div>
      </div>
    </div>
  </Layout>
)

export default BlogPage