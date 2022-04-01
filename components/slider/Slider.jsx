import "swiper/css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./Slider.module.css";
import { FreeMode, Pagination, Navigation } from "swiper";
import Link from "next/link";
import db from "../../db/db";
import { collection, getDocs } from "firebase/firestore";
export default function Slider() {
  const [slide, setSlide] = useState([]);
  const getData = async () => {
    let slides = [];
    const querySnapshot = await getDocs(collection(db, "servicesSlider"));
    querySnapshot.forEach((doc) => {
      slides = doc.data().slides;
    });
    return setSlide(slides);
  };

  useEffect(() => {
    getData();
  }, []);
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
            spaceBetween: 30,
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
        {slide.map((item, index) => {
          return (
            <SwiperSlide className={s.slide} key={index}>
              <div className={s.img}>
                <Image
                  className={s.imgBg}
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  priority={true}
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
