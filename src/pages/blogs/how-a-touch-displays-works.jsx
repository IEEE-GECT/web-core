import * as React from "react"
import '../../styles/blogposts.css'
import Layout from "../../components/layout"
import Seo from "../../components/seo"

let blogdata={
  link:"/blogs/how-a-touch-displays-works",
  title:"How A Touch Display Works",
  description:`Touch Displays revolutionized the way we interact with our devices. From the first touch screen in 1965 to the modern day touch screens,
                the technology has come a long way. In this blog, we will be discussing the working of a touch display.`,
  image:"https://ik.imagekit.io/ieeeGec/enshrine_c4A2eLU1E.jpg?tr=w-1080,h-1080,fo-auto",
  content : [


    <div className="blogbody">
   
    
        <h2 className="MainHeading">Introduction</h2>
        <p>
            Have you ever wondered about the intricate workings of your smartphone's touch screen? In this blog post, we'll
            delve into the fascinating world of touch screen technology and explore how your body chemistry plays a crucial
            role in its functioning. Join us as we uncover the hidden layers and nodes that make touch screens come alive!
        </p>
    
        <p>
            When you interact with a touch screen, you're not just tapping on a glass surface. The touch screen of a
            smartphone consists of several layers, including a protective insulating glass exterior and an LCD screen that
            displays the content. However, we often overlook the layers sandwiched in between.
        </p>
        <p>
            Among the intermediate layers, one is lined with rows of conducting material, while another features columns of
            conducting material. These layers are separated by a thin insulating layer, and when aligned, they form a grid of
            nodes. Let's explore the significance of these nodes in the touch screen's functionality.
        </p>
    
        <h3 className="SubHeading">Capacitors and Electric Fields</h3>
        <p>
            The phone's battery draws electrons along the first layer, resulting in the accumulation of electrons at each
            node. This accumulation creates a small electric field, with the nodes acting as capacitors by storing charges.
            Now, here's where your body chemistry comes into play.
        </p>
        <p>
            As an excellent conductor, your body constantly transmits electric currents due to its high water content and
            ions with a net electric charge. When you touch the screen with your finger, it acts as a third electric line
            and interacts with the existing electric field. This interaction induces a weak electric current that travels
            through your finger and back to the phone, thus altering the charge in the affected nodes.
        </p>
    
        <p>
            The phone's microprocessor relies on voltage measurements along the second layer to determine which part of the
            screen is being touched. The changes in charge caused by your finger's interaction with the nodes allow the
            microprocessor to identify the precise location of the touch. However, certain scenarios, such as water
            splattering on the screen or wearing insulating gloves, can disrupt this process.
        </p>
 
        <img src="https://ik.imagekit.io/ieeeGec/enshrine_c4A2eLU1E.jpg?tr=w-1080,h-1080,fo-auto" alt="touchscreen" className="blogImage" />
    
        <p>
            While capacitive touch screens dominate the smartphone industry, it's worth mentioning resistive touch screens.
            These screens comprise two layers: a flexible top layer, often made of plastic, and a rigid bottom layer,
            usually glass. Both layers are coated with a conductive material and separated by a thin gap. When pressure is
            applied, completing the electric circuit, the voltage changes, and the touch is detected. Resistive touch
            screens find applications in industries, ATMs, and other settings that demand durability.
        </p>
    
        <h3 className="SubHeading">Conclusion</h3>
        <p>
            Understanding the inner workings of touch screens can truly deepen our appreciation for the technology we use
            daily. Capacitive touch screens, driven by the interaction between your body's electric currents and the screen's
            nodes, enable seamless navigation and interaction on our smartphones. Next time you swipe or tap on your screen,
            remember the science that makes it all possible!
        </p>
    
        <p className="ClosingQoutes">
            We hope this blog post has sparked your curiosity, just as the nodes on the screen come alive when touched. Stay
            tuned for more exciting content next week!
        </p>
        </div>
        ,
    
           



  ]
}

const EventPage = () => {
  return (
    <Layout route="/blogs/how-a-touch-displays-works">
    <Seo
      title={blogdata.title}
      image={blogdata.image}
    />
    <div className="pt-5 pb-10 px-2 sm:px-10">
      <div className="rounded-lg shadow-2xl glass-effect">
     <div id="blogbox">
     <div className="postheading"><h1>{blogdata.title}</h1></div>
        <div className="postdescriptiont"> <p>{blogdata.description}</p></div>
        <img className="postimage" src={blogdata.image} alt={blogdata.title} />
        <div className="postcontent">{blogdata.content}</div>
     </div>
      </div>
    </div>
  </Layout>
  )
}

export default EventPage
