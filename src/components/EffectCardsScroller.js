'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';

import styles from '../styles/EffectCardsScroller.module.css';

import 'swiper/css';
import 'swiper/css/effect-cards';

const EffectCardsScroller = () => {
  const images = [
    'https://picsum.photos/seed/3/800/600',
    'https://picsum.photos/seed/4/800/600',
    'https://picsum.photos/seed/5/800/600',
  ];

  return (
    <div className={styles.container}>
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
        className={styles.swiperContainer}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i} className={styles.swiperSlide}>
            <img src={image} alt={`Slide ${i + 1}`} className={styles.slideImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EffectCardsScroller;
