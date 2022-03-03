import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import s from "./Slider.module.css";
import { FreeMode, Pagination } from "swiper";
import Slide1 from "../../public/sliderHomePage/1.jpg";
import Slide2 from "../../public/sliderHomePage/2.jpg";
import Slide3 from "../../public/sliderHomePage/3.jpg";
import Slide4 from "../../public/sliderHomePage/4.jpg";
import Slide5 from "../../public/sliderHomePage/5.jpg";
import Slide6 from "../../public/sliderHomePage/6.jpg";
import Slide7 from "../../public/sliderHomePage/7.jpg";
import Link from "next/link";
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
            src={Slide1}
            alt="Покрівля під ключ"
            role="presentation"
            width={300}
            height={300}
            placeholder="blur"
          />
          <span className={s.swiperTitle}>
            <Link href={"/projects"}>Покрівля під ключ</Link>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Slide2}
            alt="Відливи віконні"
            role="presentation"
            width={300}
            height={300}
            placeholder="blur"
          />
          <span className={s.swiperTitle}>
            <Link href={"/projects"}>Відливи віконні</Link>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Slide3}
            alt="Торцеві закінчення віконних відливів"
            role="presentation"
            width={300}
            height={300}
            placeholder="blur"
          />
          <span className={s.swiperTitle}>
            <Link href={"/projects"}>Торцеві закінчення віконних відливів</Link>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Slide4}
            alt="Ковпаки для вентканалів, димоходів"
            role="presentation"
            width={300}
            height={300}
            placeholder="blur"
          />
          <span className={s.swiperTitle}>
            <Link href={"/projects"}>Ковпаки для вентканалів, димоходів</Link>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Slide5}
            alt="Ковпаки на заборонні стовпчики"
            role="presentation"
            width={300}
            height={300}
            placeholder="blur"
          />
          <span className={s.swiperTitle}>
            <Link href={"/projects"}>Ковпаки на заборонні стовпчики</Link>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Slide6}
            alt="Парапети"
            role="presentation"
            width={300}
            height={300}
            placeholder="blur"
          />
          <span className={s.swiperTitle}>
            <Link href={"/projects"}>Парапети</Link>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Slide7}
            alt="Фальцеві покрівлі"
            role="presentation"
            width={300}
            height={300}
            placeholder="blur"
          />
          <span className={s.swiperTitle}>
            <Link href={"/projects"}>Фальцеві покрівлі</Link>
          </span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
