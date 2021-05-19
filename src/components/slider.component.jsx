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
          <div
            style={{
              position: "relative",
            }}
          >
            {/* <div
              className="glass-effect"
              style={{
                position: "absolute",
                top: 0,
                borderRadius: "1rem 1rem 0 0",
                background: "rgba(0,0,0,0.6)",
                height: "15%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 10% 50 black",
              }}
            >
              <h2
                className="text-base sm:text-3x1"
                style={{
                  color: "white",
                  // fontSize: "2rem",
                  fontWeight: 600,
                  opacity: 1,
                }}
              >
                Event
              </h2>
            </div> */}

            <img
              className="bg-cover"
              style={{
                borderRadius: "1rem",
              }}
              src="https://ik.imagekit.io/ieeeGec/co2_vff7EJTGt.jpg"
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640 }}>
          <div
            style={{
              position: "relative",
            }}
          >
            {/* <div
              className="glass-effect"
              style={{
                position: "absolute",
                top: 0,
                borderRadius: "1rem 1rem 0 0",
                background: "rgba(0,0,0,0.6)",
                height: "15%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 10% 50 black",
              }}
            >
              <h2
                className="text-base sm:text-3x1"
                style={{
                  color: "white",
                  // fontSize: "2rem",
                  fontWeight: 600,
                  opacity: 1,
                }}
              >
                Event
              </h2>
            </div> */}

            <img
              className="bg-contain"
              style={{
                borderRadius: "1rem",
              }}
              src="https://ik.imagekit.io/ieeeGec/co3_hviohpxAxd.jpg"
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: 640 }}>
          <div
            style={{
              position: "relative",
            }}
          >
            {/* <div
              className="glass-effect"
              style={{
                position: "absolute",
                top: 0,
                borderRadius: "1rem 1rem 0 0",
                background: "rgba(0,0,0,0.6)",
                height: "15%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 10% 50 black",
              }}
            >
              <h2
                className="text-base lg:text-3x1"
                style={{
                  color: "white",
                  fontWeight: 600,
                  opacity: 1,
                }}
              >
                Event
              </h2>
            </div> */}

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
      </Swiper>
    </>
  )
}

export default CoverflowEffect
