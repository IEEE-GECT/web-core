import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper"

import { Link } from "gatsby"

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
      >
        <SwiperSlide style={{ maxWidth: 640 }}>
          <div
            style={{
              position: "relative",
            }}
          >
            <img
              className="bg-auto"
              style={{
                borderRadius: "1rem",
              }}
              src="https://ik.imagekit.io/ieeeGec/temstribune_final_eMI96E0sb.jpg"
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640 }}>
          <Link to="/e/corporate-roadies">
            <div>
              <img
                className="bg-contain"
                style={{
                  borderRadius: "1rem",
                }}
                src="https://ik.imagekit.io/ieeeGec/corporate-roadies_g6jexai0H.jpeg"
                alt="img"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640 }}>
          <Link to="/e/rural-la-carte">
            <div>
              <img
                className="bg-contain"
                style={{
                  borderRadius: "1rem",
                }}
                src="https://ik.imagekit.io/ieeeGec/rural-la-carte_sPW2zo9lg.jpeg"
                alt="img"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640 }}>
          <Link to="/e/wordsworld">
            <div>
              <img
                className="bg-contain"
                style={{
                  borderRadius: "1rem",
                }}
                src="https://ik.imagekit.io/ieeeGec/wordsworld_3DLnjds-k-.jpeg"
                alt="img"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640 }}>
          <Link to="/e/level-up">
            <div>
              <img
                className="bg-contain"
                style={{
                  borderRadius: "1rem",
                }}
                src="https://ik.imagekit.io/ieeeGec/level-up_UmQs43mpDp.jpg?tr=w-1080,h-1080,fo-auto"
                alt="img"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640 }}>
          <Link to="/e/kyuriosity">
            <div>
              <img
                className="bg-contain"
                style={{
                  borderRadius: "1rem",
                }}
                src="https://ik.imagekit.io/ieeeGec/kyuriosity_uDS-6YD-Ej.jpg?tr=w-1080,h-1080,fo-auto"
                alt="img"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640 }}>
          <Link to="/e/up-the-ante">
            <div>
              <img
                className="bg-contain"
                style={{
                  borderRadius: "1rem",
                }}
                src="https://ik.imagekit.io/ieeeGec/up_the_ante_LV1EICeYl.jpeg"
                alt="img"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640 }}>
          <Link to="/e/technocrat">
            <div>
              <img
                className="bg-contain"
                style={{
                  borderRadius: "1rem",
                }}
                src="https://ik.imagekit.io/ieeeGec/technocrat_0WrpIllzjY.jpg?tr=w-1080,h-1080,fo-auto"
                alt="img"
              />
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default CoverflowEffect
