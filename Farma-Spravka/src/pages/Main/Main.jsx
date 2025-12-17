import './Main.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import Catalog from './components/Catalog/Catalog.jsx';
import Drug from './components/Drug/Drug.jsx';
import News from './components/News/News.jsx';
import Footer from '../../components/Footer/Footer.jsx';

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
    <Catalog/>
    <Drug/>
    <News/>
    <Footer/>
    </>
  )
}

export default Main