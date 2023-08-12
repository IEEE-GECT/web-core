import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/blogs.css"
import { Link } from "gatsby"

let blogposts = [
  {
    title:
      "Riding the Wave of Innovation: Unlocking the Boundless Potential of Wave Energy?",
    description: `Embark on a journey fueled by the relentless power of ocean waves, as wave energy takes
                 center stage in shaping a sustainable future.In this blog ,we will dive deep into the realm of
                 wave energy and discover how we can harness it.
    `,
    image:
      "https://ik.imagekit.io/0ta3q23cu/blogs/wave-energy/waves.jpg?updatedAt=1691247613541",
    link: "/blogs/wave-energy",
  },
  {
    title: "How A Touch Display Works",
    description: `Have you ever wondered about the intricate workings of your smartphone's touch screen? Delve into the fascinating world of 
        touch screen technology and explore how your body chemistry plays a crucial role in its functioning. learn about the hidden 
        layers and nodes that make touch screens come alive!`,
    image:
      "https://ik.imagekit.io/0ta3q23cu/blogs/touch_screen_main_img.png?updatedAt=1685790369752",
    link: "/blogs/how-a-touch-displays-works",
  },
  {
    title: "Mindset Revolution- Empower Mental Health through Virtual Reality.",
    description: `Discover how VR merges therapy and technology, empowering students on a transformative
      journey of self-discovery and growth. Embark on a remarkable path towards improved 
      mental health and holistic well-being.`,
    image:
      "https://ik.imagekit.io/0ta3q23cu/blogs/vr150/vrposterimg.jpg?updatedAt=1687950996710",
    link: "/blogs/vr-150",
  },
]

const BlogPage = () => (
  <Layout route="/blogs/">
    <Seo
      title="blogs"
      image="https://ik.imagekit.io/0ta3q23cu/blogs/tuch_display.jpg?updatedAt=1685774963438"
    />

    <div className="pt-5 pb-10 px-2 sm:px-10">
      <div className="rounded-lg shadow-2xl glass-effect">
        <h1 className="h1">Blogs</h1>
        <div className="blogcarousel">
          {blogposts.map(blogpost => {
            return (
              <div className="blogcard" key={blogpost.title}>
                <img
                  className="blogcardimage"
                  src={blogpost.image}
                  alt={blogpost.title}
                />
                <div className="blogpostcontent">
                  <h2 className="blogheading">{blogpost.title}</h2>
                  <p className="blogdescription">{blogpost.description}</p>
                  {/* <a className="readmorebtn" href="/blogs/how-a-touch-displays-works">Read More</a> */}
                  <Link to={blogpost.link} className="readmorebtn">
                    Read More
                  </Link>
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
