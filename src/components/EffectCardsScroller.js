'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

const EffectCardsScroller = () => {
  const images = [
    'https://picsum.photos/seed/3/800/600',
    'https://picsum.photos/seed/4/800/600',
    'https://picsum.photos/seed/5/800/600',
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <Swiper
        modules={[Autoplay, EffectCards]}
        effect="cards"
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{ width: '70%', position: 'relative',height:"90%" }} // Adjust width as needed
      >
        {images.map((image, i) => (
          <SwiperSlide key={i} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={image} alt={`Slide ${i + 1}`} style={{borderRadius:'60px', maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EffectCardsScroller;