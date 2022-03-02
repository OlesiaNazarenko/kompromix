import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import HeroImg from "../../public/hero.jpg";

import "swiper/css/free-mode";
import "swiper/css/pagination";

import s from "./Slider.module.css";

import { FreeMode, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={s.mySwiper}
      >
        <SwiperSlide>
          <Image
            src={HeroImg}
            alt="Покрівельні фасонні елементи"
            role="presentation"
            width={300}
            height={400}
            placeholder="blur"
          />
          <span className={s.swiperTitle}>Покрівельні фасонні елементи</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={HeroImg}
            alt="Покрівля під ключ"
            role="presentation"
            width={300}
            height={400}
            placeholder="blur"
          />
          <span className={s.swiperTitle}>Покрівля під ключ</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={HeroImg}
            alt="Відливи віконні"
            role="presentation"
            width={300}
            height={400}
            placeholder="blur"
          />
          <span className={s.swiperTitle}>Відливи віконні</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={HeroImg}
            alt="Торцеві закінчення віконних відливів"
            role="presentation"
            width={300}
            height={400}
            placeholder="blur"
          />
          <span className={s.swiperTitle}>
            Торцеві закінчення віконних відливів
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={HeroImg}
            alt="Ковпаки для вентканалів, димоходів"
            role="presentation"
            width={300}
            height={400}
            placeholder="blur"
          />
          <span className={s.swiperTitle}>
            Ковпаки для вентканалів, димоходів
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={HeroImg}
            alt="Ковпаки на заборонні стовпчики"
            role="presentation"
            width={300}
            height={400}
            placeholder="blur"
          />
          <span className={s.swiperTitle}>Ковпаки на заборонні стовпчики</span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={HeroImg}
            alt="Парапети"
            role="presentation"
            width={300}
            height={400}
            placeholder="blur"
          />
          <span className={s.swiperTitle}>Парапети</span>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src={HeroImg}
            alt="Фальцеві покрівлі"
            role="presentation"
            width={300}
            height={400}
            placeholder="blur"
          />
          <span className={s.swiperTitle}>Фальцеві покрівлі</span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
