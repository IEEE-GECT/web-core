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
      return (
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
  }

  return (
    <>
      <Swiper
        slidesPerView={width > 640 ? 3 : 1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={Navigation}
        className="mySwiper"
      >
        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody imgSrc="https://ik.imagekit.io/ieeeGec/enshrine_c4A2eLU1E.jpg?tr=w-1080,h-1080,fo-auto" />
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/articlewriting"
            imgSrc="https://ik.imagekit.io/ieeeGec/Enshrine-article_UTJ98OWWJ?tr=w-1080,h-1080,fo-auto"
          />
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/postermaking"
            imgSrc="https://ik.imagekit.io/ieeeGec/enshrine-poster_jAlpeNZB7.jpeg?tr=w-1080,h-1080,fo-auto"
          />
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/know-your-society"
            imgSrc="https://ik.imagekit.io/ieeeGec/know_your_society_pvHOAZo0-.png?tr=w-1080,h-1080,fo-auto"
          />
        </SwiperSlide>

        {/* <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody imgSrc="https://ik.imagekit.io/ieeeGec/temstribune_final_eMI96E0sb.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  )
}

export default CoverflowEffect
