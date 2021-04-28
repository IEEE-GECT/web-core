
  import React from 'react';
  import Swiper from 'react-id-swiper';
  

  const CoverflowEffect = () => {
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    }

    return (
      <Swiper {...params}>
        <div style={{ backgroundImage:'url(https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg)'}}></div>
        <div style={{ backgroundImage:'url(https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg)'}}></div>
        <div style={{ backgroundImage:'url(https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg)'}}></div>
        <div style={{ backgroundImage:'url(https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg)'}}></div>
        <div style={{ backgroundImage:'url(https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg)'}}></div>
      </Swiper>
    )
  };

  export default CoverflowEffect;
    