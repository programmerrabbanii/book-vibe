import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Bannar() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 2000 }} loop>
      <SwiperSlide><img src="image1.jpg" alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src="image2.jpg" alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src="image3.jpg" alt="Slide 3" /></SwiperSlide>
    </Swiper>
  );
}

export default Bannar;
