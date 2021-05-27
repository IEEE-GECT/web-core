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
            to="/e/zero2neuro"
            imgSrc="https://ik.imagekit.io/ieeeGec/pytorch-workshop_mlvGaXfxx.jpeg?tr=w-1080,h-1080,fo-auto"
          />
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody imgSrc="https://ik.imagekit.io/ieeeGec/temstribune_final_eMI96E0sb.jpg" />
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/corporate-roadies"
            imgSrc="https://ik.imagekit.io/ieeeGec/corporate-roadies_g6jexai0H.jpeg"
          />
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/wordsworld"
            imgSrc="https://ik.imagekit.io/ieeeGec/wordsworld_3DLnjds-k-.jpeg"
          />
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/rural-la-carte"
            imgSrc="https://ik.imagekit.io/ieeeGec/rural-la-carte_sPW2zo9lg.jpeg"
          />
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/level-up"
            imgSrc="https://ik.imagekit.io/ieeeGec/level-up_UmQs43mpDp.jpg?tr=w-1080,h-1080,fo-auto"
          />
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/up-the-ante"
            imgSrc="https://ik.imagekit.io/ieeeGec/up_the_ante_LV1EICeYl.jpeg"
          />
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/technocrat"
            imgSrc="https://ik.imagekit.io/ieeeGec/technocrat_0WrpIllzjY.jpg?tr=w-1080,h-1080,fo-auto"
          />
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 640 }}>
          <SlideBody
            to="/e/kyuriosity"
            imgSrc="https://ik.imagekit.io/ieeeGec/kyuriosity_uDS-6YD-Ej.jpg?tr=w-1080,h-1080,fo-auto"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default CoverflowEffect
