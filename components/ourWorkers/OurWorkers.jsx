import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import s from "./OurWorkers.module.css";
import { Pagination, EffectFade, Autoplay } from "swiper";

export default function OurWorkers({ props }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="ourWorkers">
      <Swiper
        loop={true}
        speed={1800}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        initialSlide={1}
        pagination={pagination}
        modules={[Pagination, EffectFade, Autoplay]}
        className={s.ourWorkers}
      >
        {props.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className={s.slide}
              style={{ backgroundImage: `url(${item})` }}
            ></SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
