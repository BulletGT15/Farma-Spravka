import styles from './Drug.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';

function Drug() {
  const swiperRef = useRef(null);
  
  return (
    <>
    <section className={styles.Drug}>
      <p>Популярные препараты</p>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        className={styles.swiper}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}>
        <SwiperSlide className={styles.swiperslide}>
          <img src="src/assets/Main/nurofen.png" alt=""/>
          <p>Нурофен обезболивающее и жаропонижающее средство</p>
          <p>250 - 400 ₽</p>
          <p><img src="Farma-Spravka/src/assets/Main/rating-star.png" alt="rating"/> 4.7</p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>Обезболивающие</SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>Витамины</SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>Сердечно-сосудистые</SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>Желудочно-кишечные</SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>От простуды и гриппа</SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>Обезболивающие</SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>Витамины</SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>Сердечно-сосудистые</SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>Желудочно-кишечные</SwiperSlide>
      </Swiper>
        <button className={styles.swiperbuttonprev}
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Предыдущий слайд"><img src="src/assets/Catalog/arrow-prev.png" alt="arrow-prev"/></button>
        <button className={styles.swiperbuttonnext}
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Следующий слайд"><img src="src/assets/Catalog/arrow-next.png" alt="arrow-next"/></button>
    </section>
    </>
  )
}

export default Drug