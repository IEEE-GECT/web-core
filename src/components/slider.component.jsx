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
        <SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="/e/revamp"
            imgSrc="https://ik.imagekit.io/fnsxnpbnzvj/ieee/IEEECOMP2_PPuxjbhDT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665496677844"
            newPage
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="https://forms.gle/gxXfzQgzNmqjrogp7"
            imgSrc="https://ik.imagekit.io/fnsxnpbnzvj/ieee/IEEECOMP_new_KrNr6gz9B.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665286530146"
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="https://forms.gle/wbJQvp9vaMV4sM1E7"
            imgSrc="https://ik.imagekit.io/fnsxnpbnzvj/ieee/IMG-20220927-WA0014_VP741GXap.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1664295787946"
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="/e/profecia"
            imgSrc="https://ik.imagekit.io/fnsxnpbnzvj/ieee/IMG-20220919-WA0005_4LMpd5s6X.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663586798779"
          />
          {/*New event poster link*/}
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="/e/recon"
            imgSrc="https://ik.imagekit.io/fnsxnpbnzvj/ieee/Recon_xWdoO1CiH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656668343309"
          />
          {/*New event poster link*/}
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default CoverflowEffect
