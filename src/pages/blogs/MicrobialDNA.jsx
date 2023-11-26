import * as React from "react"
import '../../styles/blogposts.css'
import Layout from "../../components/layout"
import Seo from "../../components/seo"

let blogdata={
  link:"/blogs/MicrobialDNA",
  title:"Microbial DNA: Decoding the Subterranean Saga",
  author:'Noorjahan K P',
  autohorpos:'Secretary, WIE AG GECT',
  authorimg:"https://ik.imagekit.io/nm1ondc9y/Noorjahan%20K.p.jpg?updatedAt=1700972103352",
  description:` In the silent realms of scientific discovery, Microbial DNA stands as Earth's virtuoso composer, crafting a symphony with ancient whispers from subterranean life. 
  Can it unravel the enigmatic saga beneath our feet, revealing secrets as astonishing as the wonders hidden in the depths of our planet?`,
  image:"https://ik.imagekit.io/nm1ondc9y/MICROBIALDNA.jpg?updatedAt=1700969644062",
  content : [
    <div className="blogbody">
        <h2 className="MainHeading">Microbial DNA: Decoding the Subterranean Saga</h2>
        <h3 className="SubHeading">Introduction:</h3>
        <p>

        As we embark on this exploration, bridging the microcosm of microbial DNA to the vast expanse of subsurface engineering, 
        a seamless journey awaits—where the delicate whispers of genetic code intertwine with the robust machinery of technology. 

        </p>
      
        <h3 className="SubHeading">Technological Symphony: Mapping the Subsurface Odyssey</h3>
        <p>Geospatial World opens a window into the technological marvels shaping subsurface engineering. Ground Penetrating Radar (GPR), Electromagnetic Location (EML), 
            and Building Information Modelling (BIM) stand as the architects of this underground realm. 
            These tools aren't just instruments; they're the guiding lights, unveiling the concealed intricacies below.
             Ground Penetrating Radar pierces the earth, Electromagnetic Location unravels hidden currents,
              and BIM orchestrates a digital dance—all contributing to an invisible masterpiece beneath the surface. </p>
        <h3 className="SubHeading">SUE Unveiled: Crafting a Real-Time 3D Tapestry</h3>
        <p> 
        Building upon this symphony, Geospatial World spotlights Subsurface Utility Engineering (SUE). This methodology isn't just about mapping; 
        it's about revealing the lifelines hidden beneath the soil. 
        For example, researchers have found a way to harness the unique microbial community profiles in valuable fluids. 
        This breakthrough allows them to identify the channels these microbial communities traveled through, understand their connectivity, and trace their origins more effectively than conventional methods. 
        SUE, akin to a skilled cartographer, meticulously plots the underground networks of cables, pipelines, and tunnels. 
        A real-time 3D tapestry materializes, transforming chaos into order, offering unparalleled insights into the intricate infrastructure below the ground.
        </p>
       
        <figure>
            <img src="https://ik.imagekit.io/nm1ondc9y/IMG-20231126-WA0003.jpg?updatedAt=1700970700709" alt="Coring Sites of the IODP drilling expedition 347" class="blogImage" />
           <figcaption>Fig a) Coring Sites of the IODP drilling expedition 347 with the specific holes sampled</figcaption>
          <figcaption>Fig b) The picture of the neighbor section of sediment samples used in the study</figcaption>
        </figure>
        <p>
        In the realm of civil engineering, microbial DNA assumes a pivotal role. 
        Beyond scientific intrigue, understanding microbial communities in the subsurface environment holds pragmatic significance. 
        Imagine harnessing this understanding to identify optimal routes for underground utilities, foreseeing potential challenges, and optimizing infrastructure projects.
         Microbial DNA becomes more than a composer; it becomes a guide for the architects of our modern world.
        </p>
    
        <figure>
            <img src="https://ik.imagekit.io/nm1ondc9y/IMG-20231126-WA0002.jpg?updatedAt=1700970700741" alt="Four combination of grinding beads" class="blogImage" />
            <figcaption>Fig a) Four combination of grinding beads</figcaption>
            <figcaption>Fig b) Specific parameter for each combination of grinding beads</figcaption>
        </figure>


        <h3 className="SubHeading">Future Vistas: Harnessing DNA for Engineering Marvels</h3>
        <p>
        Looking ahead, the prospect of integrating artificial functional motifs onto bacterial surfaces using microbial DNA opens avenues for biosynthesis, environmental protection, and advancements in human health.
         DNA's programmability and biorecognition properties position it as a potent tool, offering precise control over bacterial interactions at the bio-interface. 
        The future promises not just innovation but a harmonious collaboration between nature's code and human ingenuity—a convergence shaping industries and technologies yet to be explored fully.
            
        </p>
       



      
        <h3 className="SubHeading">Conclusion</h3>
        <p> 

        As we conclude this exploration into the fascinating world of subsurface engineering, envision a realm where microbial DNA whispers ancient tales, and technology paints a vibrant canvas beneath our feet. 
        The dance continues, beckoning us to peer into the abyss and marvel at the wonders concealed beneath the surface—a symphony of nature and innovation, a saga that unfolds with every discovery in the captivating subterranean realm.
      
        </p>



        
        <div className="sources">
            <h3 className="MiniSubHeading">Read more</h3>
              <ul>
              <li><a href="https://www.mdpi.com/2076-2607/10/12/2505">https://www.mdpi.com/2076-2607/10/12/2505</a></li>
                <li><a href="https://sustainability.stanford.edu/news/microbial-dna-can-reveal-waters-underground-origins">https://sustainability.stanford.edu/news/microbial-dna-can-reveal-waters-underground-origins</a></li>
                <li><a href="https://www.nature.com/articles/ismej2010157">https://www.nature.com/articles/ismej2010157</a></li>
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
