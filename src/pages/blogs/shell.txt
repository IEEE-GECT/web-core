// import * as React from "react"
// import '../../styles/blogposts.css'
// import Layout from "../../components/layout"
// import Seo from "../../components/seo"

// let blogdata={
//   link:"/blogs/",
//   title:"",
//   author:'',
//   autohorpos:'',
//   authorimg:"",
//   description:`
//               `,
//   image:"",
//   content : [
//     <div className="blogbody">
//         <h2 className="MainHeading">Introduction</h2>
//         <h3 className="SubHeading"></h3>
//         <p> </p>
//         <img src="" alt="" className="blogImage" />
//         <h3 className="SubHeading">Conclusion</h3>
//         <p></p>
//         <div className="sources">
//             <h3 className="MiniSubHeading">Read more</h3>
//               <ul>
//               <li><a href="link"> source</a></li>
//               </ul>  
//         </div>
//         <p className="ClosingQoutes" >
//             We hope this blog post has sparked your curiosity, just as the nodes on the screen come alive when touched. Stay
//             tuned for more exciting content next week!
//         </p>
//         </div>
//         ,
//   ],

// }

// const EventPage = () => {
//   return (
//     <Layout route={blogdata.link}>
//     <Seo
//       title={blogdata.title}
//       image={blogdata.image}
//     />
//     <div className="pt-5 pb-10 px-2 sm:px-10">
//       <div className="rounded-lg shadow-2xl glass-effect">
//      <div id="blogbox">
//      <div className="postheading"><h1>{blogdata.title}</h1></div>
//         <div className="postdescriptiont"> 
//            <p>{blogdata.description}</p> 
//            <div className="authordata">
//                  <img className="authorimage" src={blogdata.authorimg} alt={blogdata.author} />
//                  {blogdata.author}<br></br>
//                  {blogdata.autohorpos}
//            </div>
//         </div>
//         <img className="postimage" src={blogdata.image} alt={blogdata.title} />
//         <div className="postcontent">{blogdata.content}</div>
//      </div>
//       </div>
//     </div>
//   </Layout>
//   )
// }

// export default EventPage
