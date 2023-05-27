import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const HomeHeroImg = () => (
<div className="relative -mt-20" style={{ height: `100vh`}}>
<StaticImage
  src="../../images/group.webp"
  quality={100}
  placeholder="blurred"
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="cover"
  className="inset-0"
  style={{ position: "absolute" }}
/>
<div className="bg-black opacity-40 absolute inset-0" />
<div className="absolute h-full w-full text-white flex items-center justify-center">
  <h1 className="text-3xl sm:text-6xl font-bold">
    IEEE Student Branch GEC Thrissur
  </h1>
</div>
</div>
)
export default HomeHeroImg;