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

           `What just happened when you clicked or swiped on your screen using your finger which eventually led to this page right here..?
           Has it ever occurred to you that while you scroll through reels and shorts on different apps, your body chemistry is the prime 
           part of the “ working of touch screen” and not any other component? Well if you haven't thought about this, i'm glad i could light 
           the matter on to you and if you already have, buddy! you've reached the right corner of the internet.`,
    
           ` As most of you must know, the touch screen of a smartphone essentially consists of a protective , insulating glass exterior and an 
           LCD screen at the bottom which produces the content . What we forget is the several sheets present between them.One of them is lined
            with rows of conducting material which carry Alternative electric current. Imagine the same but in columns, that's how another sheet 
            is. Both of them are separated by a thin insulating layer. As you can imagine, one aligned on top of another makes a grid. Let's call
             the points the column and rows intersect as nodes. `,
           `The phone's battery draws electrons along the first layer and some electrons accumulate at every node which inturn creates a small electric field.
           You can say that the nodes act as capacitors since they store charges. Something you have to keep in your mind is that your body is a great conductor
           and is constantly transmitting electric currents (since 70 percent of its mass is water which is loaded with ions which have a net electric charge).
           As you must have guessed, your finger acts as a third electric line here. It interacts with the existing electric field which further induces a weak
           electric current that travels through your finger and back to the phone. This changes the charge in the affected nodes. `,
       
           `The voltage measurements along the second layer tells the phone's microprocessor which part of the screen is being touched. This is why your phone acts
            bizarre when water is splattered on the screen(acting like multiple places are touched at once). While, if you are wearing a glove or some kind of insulator
             the current doesn't flow through your hand thus producing no effect.`,

             `What we have talked about in this blog is purely on capacitive touch screens which are heavily used in smartphones. There are others like resistive touch
           screens where there are two layers- the top, of a flexible material like plastic and the bottom with something rigid like glass. These layers are coated 
           with a conductive material and separated by a thin gap. When something like your finger pushes hard enough, it completes the electric circuit causing a 
           change of voltage which is then reacted upon.These are the ones generally used in industries ,ATMs etc because of their durability.`,

           `Hope this invoked something in you just like how nodes get stimulated when you touch them on the screen. See you guys next week!`  ,


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
        <div className="postheading"><h1>{blogdata.title}</h1></div>
        <div className="postdescriptiont"> <p>{blogdata.description}</p></div>
        <div className="postimage"><img src={blogdata.image} alt={blogdata.title} /></div>
        <div className="postcontent">
          {blogdata.content.map((para)=>{
            return <p>{para}</p>
          }
          )}
          </div>
       

      </div>
    </div>
  </Layout>
  )
}

export default EventPage
