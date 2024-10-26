import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ExampleImage1 from '../../assets/images/favicon.png';
import { useTranslation } from 'react-i18next';

export default function App() {
  const {t} = useTranslation()
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content-container">
            <div className="slide-text">
              <h2 className="slide-title">{t("heroHeader")}</h2>
              <p className="slide-description">{t("heroBody")}</p>
              <a href="#" className="slide-button">{t("heroLink")}</a>
            </div>
            <div className="slide-image">
              <img src={ExampleImage1} alt="Example 1" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content-container">
            <div className="slide-text">
              <h2 className="slide-title">{t("heroHeader")}</h2>
              <p className="slide-description">{t("heroBody")}</p>
              <a href="#" className="slide-button">{t("heroLink")}</a>
            </div>
            <div className="slide-image">
              <img src={ExampleImage1} alt="Example 2" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content-container">
            <div className="slide-text">
              <h2 className="slide-title">{t("heroHeader")}</h2>
              <p className="slide-description">{t("heroBody")}</p>
              <a href="#" className="slide-button">{t("heroLink")}</a>
            </div>
            <div className="slide-image">
              <img src={ExampleImage1} alt="Example 3" />
            </div>
          </div>
        </SwiperSlide>
    </Swiper>
  );
}
