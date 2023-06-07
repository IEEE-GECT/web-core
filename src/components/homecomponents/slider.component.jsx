import React from "react"
import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper"
import { Link } from "gatsby"
import "swiper/swiper-bundle.min.css"
SwiperCore.use([EffectCoverflow, Navigation, Pagination])
const CoverflowEffect = () => {
  const [width, setWidth] = React.useState(0)
  React.useEffect(() => {
    setWidth(window.innerWidth)
    
  }, [])
  const SlideBody = props => {
    if (props.to)
      return props.newPage ? (
        <a href={props.to} target="_blank" rel="noreferrer">
          <div>
            <img
              className="bg-contain"
              style={{
                borderRadius: "1rem",
              }}
              src={props.imgSrc}
              alt="img"
            />
          </div>
        </a>
      ) : (
        <Link to={props.to}>
          <div>
            <img
              className="bg-contain"
              style={{
                borderRadius: "1rem",
              }}
              src={props.imgSrc}
              alt="img"
            />
          </div>
        </Link>
      )
    else
      return (
        <div>
          <img
            className="bg-contain"
            style={{
              borderRadius: "1rem",
            }}
            src={props.imgSrc}
            alt="img"
          />
        </div>
      )
  }
  SlideBody.propTypes = {
    to: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    newPage: PropTypes.bool,
  }

  let slideritems = [
    {
      to:"/e/enshrine",
      imgSrc:"https://ik.imagekit.io/0ta3q23cu/events/enshrine.jpg?updatedAt=1686138488167",
      newPage:true,
    },

    {
      to: "e/enigma",
      imgSrc: "https://ik.imagekit.io/nm1ondc9y/enigma.jpg?updatedAt=1685107189758",
      newPage: true,
    },
    {
      to: "https://bit.ly/pesdayeventecosafe",
      imgSrc: "https://ik.imagekit.io/0ta3q23cu/events/Ecosafe.jpg?updatedAt=1681570818678",
      newPage: true,
    },
    {
      to: "https://bit.ly/Web-Wiz",
      imgSrc: "https://ik.imagekit.io/nm1ondc9y/webwiz.jpg?updatedAt=1681551593092",
      newPage: true,
    },
    {
      to: "http://bit.ly/ieeeelectroclash",
      imgSrc: "https://ik.imagekit.io/nm1ondc9y/electroclash.jpg?updatedAt=1681551593051",
      newPage: true,
    },
    {
      to: "https://forms.gle/dQWfYzLiV4DCeFnLA",
      imgSrc: "https://ik.imagekit.io/nm1ondc9y/circuitex.jpg?updatedAt=1681551593030",
      newPage: true,
    },
    {
      to:"/e/agm23",
      imgSrc:"https://ik.imagekit.io/nm1ondc9y/agm_23.jpg?updatedAt=1681446616993",
      newPage:true,
    },
  {
    to:"/e/visionQuest",
  imgSrc:"https://ik.imagekit.io/nm1ondc9y/vision_quest.jpg?updatedAt=1681446615460",
  newPage:true,
},
  {
    to:"/e/webinar",
    imgSrc:"https://ik.imagekit.io/nm1ondc9y/webinar_on_linked_in_jobs_and_ieee.jpg?updatedAt=1681446615217",
    newPage:true,
  },




  ]

  return (
    <div className="pt-10 pb-5 px-2 sm:px-10">
    <div className="rounded-lg shadow-2xl glass-effect">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto sm:py-16">
          <h1 className="font-medium text-3xl mb-8 text-gray-900 text-left ml-8 ">Upcoming Events </h1>

          <div className="flex justify-center align-center ">
            <div className="min-w-full md:w-4/6">
   <Swiper
      spaceBetween={50}
      slidesPerView={width > 640 ? 3 : 1}
      pagination={{
        clickable: true,
        
      }}
      className="mySwiper">
      {slideritems.map((item, index) => (
        <SwiperSlide key={index}>
          <SlideBody

            to={item.to}
            imgSrc={item.imgSrc}
            newPage={item.newPage}
          />
        </SwiperSlide>
      ))}
      
    </Swiper>
    <p className="text-xs pt-1 sm:text-sm">
                  Click on Event Poster to Register
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
export default CoverflowEffect