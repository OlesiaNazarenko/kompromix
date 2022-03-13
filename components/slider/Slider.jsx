import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./Slider.module.css";
import { FreeMode, Pagination, Navigation } from "swiper";
import Link from "next/link";
export default function Slider({ data }) {
  return (
    <>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          450: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        observer={true}
        observeParents={true}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className={s.mySwiper}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide className={s.slide} key={index}>
              <div className={s.img}>
                <Image
                  className={s.imgBg}
                  src={item.image}
                  alt={item.title}
                  role="presentation"
                  layout="fill"
                />
              </div>
              <h3 className={s.slider__title}>{item.title}</h3>
              <ul className={s.slider__list}>
                {item.listItems.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
              <span className={s.swiperTitle}>
                <Link href={"/projects"}>Детальніше</Link>
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
