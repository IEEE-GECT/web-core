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
      >
        <SwiperSlide style={{ maxWidth: 640 }}>
          <div>
            <img
              style={{
                borderRadius: "1rem",
              }}
              src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640 }}>
          <div>
            <img
              style={{
                borderRadius: "2rem",
              }}
              src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640 }}>
          <div>
            <img
              style={{
                borderRadius: "2rem",
              }}
              src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640 }}>
          <div>
            <img
              style={{
                borderRadius: "2rem",
              }}
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
