import styles from './Drug_sec.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';

function Drug_sec() {
  const swiperRef = useRef(null);
  
  return (
    <>
    <section className={styles.Drug_sec}>
      <p className={styles.p_tittle}>Популярные препараты</p>
        <div className={styles.div_drug}>
          <button className={styles.swiperbuttonprev}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Предыдущий слайд"><img src="src/assets/Catalog/arrow-prev.png" alt="arrow-prev"/></button>
          <Swiper
          slidesPerView={5}
          spaceBetween={12.4}
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
                <img src="src/assets/Main/nurofen.png" alt="drug"/>
                <p>Нурофен обезболивающее и жаропонижающее средство</p>
                <p>250 - 400 ₽</p>
                <p><img src="src/assets/Main/rating-star.png" alt="rating"/> 4.7</p>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <img src="src/assets/Main/nurofen.png" alt=""/>
                <p>Нурофен обезболивающее и жаропонижающее средство</p>
                <p>250 - 400 ₽</p>
                <p><img src="src/assets/Main/rating-star.png" alt="rating"/> 4.7</p>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <img src="src/assets/Main/nurofen.png" alt=""/>
                <p>Нурофен обезболивающее и жаропонижающее средство</p>
                <p>250 - 400 ₽</p>
                <p><img src="src/assets/Main/rating-star.png" alt="rating"/> 4.7</p>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <img src="src/assets/Main/nurofen.png" alt=""/>
                <p>Нурофен обезболивающее и жаропонижающее средство</p>
                <p>250 - 400 ₽</p>
                <p><img src="src/assets/Main/rating-star.png" alt="rating"/> 4.7</p>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <img src="src/assets/Main/nurofen.png" alt=""/>
                <p>Нурофен обезболивающее и жаропонижающее средство</p>
                <p>250 - 400 ₽</p>
                <p><img src="src/assets/Main/rating-star.png" alt="rating"/> 4.7</p>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <img src="src/assets/Main/nurofen.png" alt=""/>
                <p>Нурофен обезболивающее и жаропонижающее средство</p>
                <p>250 - 400 ₽</p>
                <p><img src="src/assets/Main/rating-star.png" alt="rating"/> 4.7</p>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <img src="src/assets/Main/nurofen.png" alt=""/>
                <p>Нурофен обезболивающее и жаропонижающее средство</p>
                <p>250 - 400 ₽</p>
                <p><img src="src/assets/Main/rating-star.png" alt="rating"/> 4.7</p>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <img src="src/assets/Main/nurofen.png" alt=""/>
                <p>Нурофен обезболивающее и жаропонижающее средство</p>
                <p>250 - 400 ₽</p>
                <p><img src="src/assets/Main/rating-star.png" alt="rating"/> 4.7</p>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <img src="src/assets/Main/nurofen.png" alt=""/>
                <p>Нурофен обезболивающее и жаропонижающее средство</p>
                <p>250 - 400 ₽</p>
                <p><img src="src/assets/Main/rating-star.png" alt="rating"/> 4.7</p>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <img src="src/assets/Main/nurofen.png" alt=""/>
                <p>Нурофен обезболивающее и жаропонижающее средство</p>
                <p>250 - 400 ₽</p>
                <p><img src="src/assets/Main/rating-star.png" alt="rating"/> 4.7</p>
              </SwiperSlide>
          </Swiper>
          <button className={styles.swiperbuttonnext}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Следующий слайд"><img src="src/assets/Catalog/arrow-next.png" alt="arrow-next"/></button>
        </div>
    </section>
    </>
  )
}

export default Drug_sec