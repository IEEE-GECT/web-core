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
      spaceBetween={50}
      slidesPerView={width > 640 ? 3 : 1}
      pagination={{
        clickable: true,
        
      }}
      className="mySwiper"
      
    >

<SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="https://or9rzh0e5df.typeform.com/to/CjqYXT2F"
            imgSrc="https://ik.imagekit.io/nm1ondc9y/enigma.png?updatedAt=1685192203489"
            newPage
          />
          {/*New event poster link*/}
        </SwiperSlide>

        
        <SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="https://bit.ly/pesdayeventecosafe"
            imgSrc="https://ik.imagekit.io/0ta3q23cu/events/Ecosafe.jpg?updatedAt=1681570818678"
            newPage
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="https://bit.ly/Web-Wiz"
            imgSrc="https://ik.imagekit.io/nm1ondc9y/webwiz.jpg?updatedAt=1681551593092"
            newPage
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="http://bit.ly/ieeeelectroclash"
            imgSrc="https://ik.imagekit.io/nm1ondc9y/electroclash.jpg?updatedAt=1681551593051"
            newPage
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="https://forms.gle/dQWfYzLiV4DCeFnLA"
            imgSrc="https://ik.imagekit.io/nm1ondc9y/circuitex.jpg?updatedAt=1681551593030"
            newPage
          />
          {/*New event poster link*/}
        </SwiperSlide>






{/*----------------------------------------------------------------- */}

         <SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="/e/techsprint"
            imgSrc="https://ik.imagekit.io/0ta3q23cu/techsprintcard.jpg?updatedAt=1681307812186"
            newPage
          />
          {/*New event poster link*/}
        </SwiperSlide>


        <SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="/e/agm23"
            imgSrc="https://ik.imagekit.io/nm1ondc9y/agm_23.jpg?updatedAt=1681446616993"
            newPage
          />
          {/*New event poster link*/}
        </SwiperSlide>

  
        <SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="/e/visionQuest"
            imgSrc="https://ik.imagekit.io/nm1ondc9y/vision_quest.jpg?updatedAt=1681446615460"
            newPage
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="/e/webinar"
            imgSrc="https://ik.imagekit.io/nm1ondc9y/webinar_on_linked_in_jobs_and_ieee.jpg?updatedAt=1681446615217"
            newPage
          />
          {/*New event poster link*/}
        </SwiperSlide>


        <SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="/e/autocad"
            imgSrc="https://ik.imagekit.io/fnsxnpbnzvj/ieee/autocad2_Csdz8y0Ud.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668864581792"
            newPage
          />
          {/*New event poster link*/}
        </SwiperSlide>

        <SwiperSlide style={{ maxWidth: 640, maxHeight: 600 }}>
          <SlideBody
            to="/e/ui-ux"
            imgSrc="https://ik.imagekit.io/fnsxnpbnzvj/ieee/IMG-20221117-WA0005_rH_Glmhw8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668691500316"
            newPage
          />
          {/*New event poster link*/}
        </SwiperSlide>

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
