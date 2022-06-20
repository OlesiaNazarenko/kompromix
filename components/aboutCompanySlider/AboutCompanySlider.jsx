import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classNames from "classnames";
import "swiper/css/effect-fade";
import s from "./AboutCompanySlider.module.css";
import { Pagination, EffectFade, Autoplay, Navigation } from "swiper";

export default function AboutCompanySlider({ props }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="aboutCompanySliderWrap">
      <Swiper
        navigation={true}
        loop={true}
        speed={1800}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        className={s.aboutCompanySlider}
      >
        {props.map(({ headline, text, img }, index) => {
          return (
            <SwiperSlide
              key={index}
              className={s.slide}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div
                className={classNames("container", s.aboutCompanySlider__wrap)}
              >
                <h2 className={s.aboutCompanySlider__title}>{headline}</h2>
                <p className={s.aboutCompanySlider__text}>{text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
