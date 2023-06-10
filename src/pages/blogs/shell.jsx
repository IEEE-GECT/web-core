import * as React from "react"
import '../../styles/blogposts.css'
import Layout from "../../components/layout"
import Seo from "../../components/seo"

let blogdata={
  link:"/blogs/...",
  title:" ?",
  author:'Anena Samrin',
  autohorpos:'TEMS secretary',
  authorimg:"https://ik.imagekit.io/0ta3q23cu/blogs/anenaa_ioPm_1sEI?updatedAt=1685775012813",
  description:`Touch Displays revolutionized the way we interact with our devices. From the first touch screen in 1965 to the modern day touch screens,
                the technology has come a long way. In this blog, we will be discussing the working of a touch display.`,
  image:"https://ik.imagekit.io/0ta3q23cu/blogs/tuch_display.jpg?updatedAt=1685774963438",
  content : [
    <div className="blogbody">
   
    
        <h2 className="MainHeading">Introduction</h2>
        <h3 className="SubHeading">Capacitors and Electric Fields</h3>
        <p>  </p>
        <img src="https://ik.imagekit.io/0ta3q23cu/blogs/human_water.jpg?updatedAt=1685775072628" alt="touchscreen" className="blogImage" />
    
        <h3 className="SubHeading">Conclusion</h3>
        <p>
 
        </p>
        <div className="sources">
            <h3 className="MiniSubHeading">Read more</h3>
              <ul>
                <li>source</li>
              <li>  <a href="link"> source</a></li>
              </ul>  

        </div>
    
        <p className="ClosingQoutes" >
            We hope this blog post has sparked your curiosity, just as the nodes on the screen come alive when touched. Stay
            tuned for more exciting content next week!
        </p>
   
        </div>
        ,
  ],

}

const EventPage = () => {
  return (
    <Layout route={blogdata.link}>
    <Seo
      title={blogdata.title}
      image={blogdata.image}
    />
    <div className="pt-5 pb-10 px-2 sm:px-10">
      <div className="rounded-lg shadow-2xl glass-effect">
     <div id="blogbox">
     <div className="postheading"><h1>{blogdata.title}</h1></div>
        <div className="postdescriptiont"> 
           <p>{blogdata.description}</p> 
           <div className="authordata">
                 <img className="authorimage" src={blogdata.authorimg} alt={blogdata.author} />
                 {blogdata.author}<br></br>
                 {blogdata.autohorpos}
           </div>
        </div>
        <img className="postimage" src={blogdata.image} alt={blogdata.title} />
        <div className="postcontent">{blogdata.content}</div>
     </div>
      </div>
    </div>
  </Layout>
  )
}

export default EventPage
