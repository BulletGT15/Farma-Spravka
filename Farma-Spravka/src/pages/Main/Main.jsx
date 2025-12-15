import './Main.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';

function Main() {
  const swiperRef = useRef(null);
  
  return (
    <>
    <section className='Search'>
        <div>
            <p>Ваш надёжный путеводитель по лекарствам</p>
            <p>Найдите лекарства которые вам необходимы</p>
            <div><img src="src/assets/Main/search.png" alt="search" /><input type="text" placeholder='Искать...'/></div>
        </div>
    </section>

        <section className='Catalog'>
      <p>Популярные категории препаратов</p>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>От простуды и гриппа</SwiperSlide>
        <SwiperSlide>Обезболивающие</SwiperSlide>
        <SwiperSlide>Витамины</SwiperSlide>
        <SwiperSlide>Сердечно-сосудистые</SwiperSlide>
        <SwiperSlide>Желудочно-кишечные</SwiperSlide>
        <SwiperSlide>От простуды и гриппа</SwiperSlide>
        <SwiperSlide>Обезболивающие</SwiperSlide>
        <SwiperSlide>Витамины</SwiperSlide>
        <SwiperSlide>Сердечно-сосудистые</SwiperSlide>
        <SwiperSlide>Желудочно-кишечные</SwiperSlide>
      </Swiper>
      <button className="swiper-button-prev"
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Предыдущий слайд"/>
      <button className="swiper-button-next"
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Следующий слайд"
      />
    </section>
    </>
  )
}

export default Main