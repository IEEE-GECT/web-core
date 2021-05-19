import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper"

import "swiper/swiper-bundle.min.css"

SwiperCore.use([EffectCoverflow, Navigation, Pagination])

const CoverflowEffect = () => {
  return (
    <>
      <Swiper
        effect="coverflow"
        navigation
        pagination
        grabCursor
        centeredSlides
        slidesPerView={"auto"}
        loop
        // style={{
        //   height: 500,
        //   width: 500,
        // }}
      >
        <SwiperSlide style={{ maxWidth: 640 }}>
          <div
          // style={{
          //   position: realative,
          // }}
          >
            {/* <hr
              style={{
                position: absolute,
                top: 0,
              //   // box-shadow:
              // }}
            /> */}
            <img
              src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640 }}>
          <div>
            <img
              src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640 }}>
          <div>
            <img
              src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640 }}>
          <div>
            <img
              src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
              alt="img"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default CoverflowEffect
