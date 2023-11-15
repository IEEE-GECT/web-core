import * as React from "react"
import '../../styles/blogposts.css'
import Layout from "../../components/layout"
import Seo from "../../components/seo"

let blogdata={
  link:"/blogs/pegasus",
  title:"Pegasus : The World’s Most Invasive Spyware",
  author:'Sneha Sara Elias',
  autohorpos:'Computer Society Secretary',
  authorimg:"https://ik.imagekit.io/0ta3q23cu/blogs/pegasus/author_pic.jpg?updatedAt=1700063599583",
  description:`
              A spyware that can access your phone and all its secrets through a single call, even if you leave 
              it unanswered. Unbelievable right? Delve deep into the world of Pegasus to know more.
              `,
  image:"https://ik.imagekit.io/0ta3q23cu/blogs/pegasus/intro_pic.webp?updatedAt=1700063614333",
  content : [
    <div className="blogbody">
        <h2 className="MainHeading">Pegasus</h2>
        <h3 className="SubHeading">Introduction</h3>
        <p> 
        Ahmed Mansoor an Arab human rights defender received a text message promising “secrets”
         about torture happening in prisons in the United Arab Emirates by following a link. He sent this link
          to Citizen lab of University of Toronto which with the collaboration of Lookout – a software firm,
           investigated and found out that if Mansoor had followed the link, it would have jail-broken his phone 
           and implanted a spyware: Pegasus!
        It is the name for perhaps the most powerful piece of spyware ever developed. Once it has encroached 
        into your phone, Pegasus can turn it into a 24-hour surveillance device. Developed by NSO Group an
         Israeli cyber-arms company, it can copy messages you send or receive, harvest your photos and record 
         your calls, it might secretly film you through your phone’s camera, or activate your microphone to
          record your conversations. It can pinpoint where you are, where you’ve been and who you’ve met.
        </p>
        <img src="https://ik.imagekit.io/0ta3q23cu/blogs/pegasus/pegasus3.png?updatedAt=1700063613967" alt=" impact of pegasus" className="blogImage" />
        <h3 className="SubHeading">Pegasus : The Origin</h3>
        <p>Pegasus was the brainchild of NSO Group, a private Israeli cyber-arm company which is named after the first letters of its founders: Niv Carmi,
             Shalev Hulio and Omri Lavie. The three were in fact ex-members of unit 8200, a division of Israeli Intelligence Corps which specializes in 
             signal collection and code decryption. NSO Group developed its first iteration of Pegasus spyware in 2011. The NSO Group has published sections 
             of contracts which require customers to use its products only for criminal and national security investigations and has stated that it has an
              industry-leading approach to human rights. Pegasus was designed with the intention to counter terrorism. Hence it was agreed that Pegasus 
              would only be sold to foreign governments and not to private entities and with the consent of Israeli government.
            </p>
         <h3 className="SubHeading">How Pegasus infiltrates a phone and what it can do</h3>   
         <p>
           The earliest version of Pegasus which was discovered in 2016 in Ahmed Mansoor’s phone infected mobile devices through what is called spear-phishing text messages or emails that trick a target into clicking on a malicious link.
           Since then, however its attacking capabilities have become more advanced. Pegasus infections can be achieved through so-called zero-click attacks- i.e., they can run without any interaction from the victim. Once installed, Pegasus has been reported to be able to run arbitrary code, extract contacts, call logs, messages, photos, web browsing history, settings, as well as gather information from apps including but not limited to communications apps iMessages, Gmail, Viber, Facebook, WhatsApp, Telegram, and Skype.
           In 2019 WhatsApp revealed that NSO’s software had been used to send malware to more than 1,400 phones by exploiting a zero-day vulnerability which are flaws or bugs in an OS that the mobile phone’s manufacturer does not yet know about and so has not been able to fix.
           Malicious Pegasus code will be installed on the phone by simply placing a WhatsApp call, even if the target never answers the call. Once installed there is literally nothing Pegasus cannot access. When an iPhone is compromised, it’s done so in such a way that allows the attacker to obtain administrative privileges or root privileges, in other words Pegasus can do more than what the user can do.
           More recent versions of Pegasus only inhabit the phone’s temporary memory rather than it’s hard drive, meaning that once the phone is powered down virtually all traces of the software vanishes.
         </p>
        <h3 className="SubHeading">Do we need to worry?</h3>
        <p>Well, in the first place Pegasus is quite expensive, as per the reports it charges the government bodies around USD 650,000 to spy 
            on 10 iPhones or android phones with additional charges like installation fee, maintenance fee etc. Secondly the software as per NSO’s 
            specifications can only be used by foreign governments as a tool to ensure safety of the nation. Therefore, unless and until 
            you become someone who the government thinks should be spied on, Pegasus won’t get in your way!
</p>
        <div className="sources">
            <h3 className="MiniSubHeading">Read more</h3>
              <ul>
              <li><a href="https://en.wikipedia.org/wiki/Pegasus_(spyware)">Wikipedia</a></li>
                <li><a href="https://www.theguardian.com/news/2019/may/13/how-to-protect-your-phone-from-being-hacked">The Guardian</a></li>
                <li><a href="https://www.cnet.com/tech/mobile/pegasus-spyware-and-citizen-surveillance-what-you-need-to-know/">CNET</a></li>
                <li><a  href="https://www.thehindu.com/news/national/telangana/pegasus-spyware-on-my-phone-says-akunuri-murali/article67365559.ece">The Hindu</a>  </li>
              
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
