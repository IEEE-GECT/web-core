import * as React from "react"
import '../../styles/blogposts.css'
import Layout from "../../components/layout"
import Seo from "../../components/seo"

let blogdata = {
    link: "/blogs/mindset-revolution-empower-mental-health-through-virtual-reality",
    title: "Mindset Revolution- Empower Mental Health through Virtual Reality.",
    author: 'Bhadra Nair',
    autohorpos: 'ComSoc secretary',
    authorimg: "https://ik.imagekit.io/0ta3q23cu/blogs/vr150/Bhadra.jpg?updatedAt=1686415488822",
    description: `Discover how VR merges therapy and technology, empowering students on a transformative
                 journey of self-discovery and growth. Embark on a remarkable path towards improved 
                 mental health and holistic well-being.`,
    image: "https://ik.imagekit.io/0ta3q23cu/blogs/vr150/thumbimg.jpg?updatedAt=1686412217918",
    content: [
        <div className="blogbody">
           <h2 className="MainHeading">Introduction</h2>
             <p>
                Hey college comrades! Get ready to revolutionize your mental well-being with virtual reality
                (VR). Step into a world of tranquility and conquer your fears like never before.
                Escape the pressures of college life and find solace in captivating virtual environments. With
                VR, you can transport yourself to serene beaches and enchanted forests, all from the
                comfort of your dorm room. Take a break from the grind and recharge your mind.
                But VR goes beyond escapism. It's a powerful tool for therapy. Face your fears through
                exposure therapy in a safe environment. Conquer anxiety disorders, phobias, and
            </p>
            <img src="https://ik.imagekit.io/0ta3q23cu/blogs/vr150/depressedghost.jpg?updatedAt=1686412217843" alt="touchscreen" className="blogImage" />
            <p>
                post-traumatic stress as your confidence soars. Imagine delivering a virtual presentation on
                a stage, empowering you for real-world success.
                Stress and anxiety are common college companions, but VR has your back. Sensors track
                your heart rate and breathing, guiding you towards serenity. Engage in breathing exercises
                and guided meditation within enchanting landscapes. Watch stress melt away and focus
                sharpen.
            </p>
            <img src="https://ik.imagekit.io/0ta3q23cu/blogs/vr150/vrdoc.jpg?updatedAt=1686412217892" alt="touchscreen" className="blogImage" />
            <p>
                Virtual socialization is another VR marvel. Engage in multiplayer games and form bonds with
                virtual friends, breaking free from isolation. Walk in someone else's shoes through immersive
                simulations, fostering empathy and deep connections.
                Remember, VR complements professional therapy, but it's not a substitute. As technology
                advances, VR's potential in mental well-being expands. Cognitive therapy, pain
                management, and addressing depression and schizophrenia are areas of exploration.
            </p>


            <img src="https://ik.imagekit.io/0ta3q23cu/blogs/vr150/depressedghost.jpg?updatedAt=1686412217843" alt="touchscreen" className="blogImage" />

            <h3 className="SubHeading">Conclusion</h3>
            So, friends, fasten your seatbelts. VR is here to transform your mental health, offering
            tranquillity, empowerment, and remarkable breakthroughs. Unleash the power of VR and
            embark on an interactive journey to a happier college experience.
            <p>

            </p>
            <div className="sources">
                <h3 className="MiniSubHeading">Read more</h3>
                <ul>
                    <li>  <a href="https://www.igi-global.com/chapter/using-virtual-reality-in-college-student-mental-health-treatment/259666">IGI</a></li>
                    <li>  <a href="https://iopscience.iop.org/article/10.1088/1742-6596/1087/6/062056/pdf">IOP Science</a></li>
                    <li>  <a href="hhttps://www.hindawi.com/journals/mpe/2022/4900890/">Hindawi</a></li>

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