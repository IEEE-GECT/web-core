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
          <SlideBody
            to="/e/aurea"
            imgSrc="https://ik.imagekit.io/ieeeGec/slider_Hp43Pv6rZA?updatedAt=1630327585647&tr=w-1080,h-1080,fo-auto"
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/glide"
            imgSrc="https://ik.imagekit.io/ieeeGec/drone-sq_MoXsdZcPR?updatedAt=1629461983619"
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/forge"
            imgSrc="https://ik.imagekit.io/ieeeGec/tr:w-1026,h-1026,cm-extract,x-33,y-135/3dprinting3_q1pEAHkuH.jpg"
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/mind-to-mind"
            imgSrc="https://ik.imagekit.io/ieeeGec/tr:w-1054,h-1054,cm-extract,x-16,y-137/mind-to-mind2_HQTWLd8Wi.jpg"
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/inauguration"
            imgSrc="https://ik.imagekit.io/ieeeGec/tr:w-938,h-938,cm-extract,x-2,y-166/rkrishnansir-final_psAghAhM3.jpeg"
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/educe"
            imgSrc="https://ik.imagekit.io/ieeecollege/educe_final_ZW9-xsdAo.jpg?tr=w-1080,h-1080,fo-auto"
          />
          {/*New event poster link*/}
        </SwiperSlide>

        {/*<SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/know-your-society"
            imgSrc="https://ik.imagekit.io/ieeeGec/know_your_society_pvHOAZo0-.png?tr=w-1080,h-1080,fo-auto"
          />
      </SwiperSlide>*/}
      </Swiper>
    </>
  )
}

export default CoverflowEffect
