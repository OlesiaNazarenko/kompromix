import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classNames from "classnames";
import "swiper/css/effect-fade";
import s from "./OurBenefits.module.css";
import { Pagination, EffectFade, Autoplay, Navigation } from "swiper";
import Image from "next/image";
import db from "../../db/db";
import { collection, getDocs } from "firebase/firestore";
export default function OurBenefits() {
  const [slides, setSlides] = useState([]);
  const getData = async () => {
    let slide = [];
    const querySnapshot = await getDocs(collection(db, "ourBenefits"));
    querySnapshot.forEach((doc) => {
      slide = doc.data().slides;
    });
    return setSlides(slide);
  };

  useEffect(() => {
    getData();
  }, []);
  const textSlides = slides.filter((item) => {
    return item.title;
  });
  const imgSlides = slides.filter((item) => {
    return item.img;
  });

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
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
        className={s.ourBenefitsSlider}
      >
        <div
          className={classNames(s.ourBenefitsSlider__constantBox, "container")}
        >
          <div className={s.ourBenefitsSlider__constantBox_img}>
            <Image src={"/ourBenefits/mainIcon.svg"} width={80} height={80} />
          </div>
          <h2>Професійний підхід</h2>
          <p>Переваги роботи з нами</p>
        </div>
        {textSlides.map(({ title, span1, span2, subtitle }, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className={classNames("container", s.ourBenefitsSlider__wrap)}
              >
                <span className={s.ourBenefitsSlider__subtitle}>
                  {subtitle}
                </span>
                <h3 className={s.ourBenefitsSlider__title}>{title}</h3>
                <span className={s.ourBenefitsSlider__span1}>{span1}</span>
                <span className={s.ourBenefitsSlider__span2}>{span2}</span>
              </div>
            </SwiperSlide>
          );
        })}

        {imgSlides.map(({ img, span1, span2 }, index) => {
          return (
            <SwiperSlide key={index} id={index}>
              <div
                className={classNames("container", s.ourBenefitsSlider__wrap)}
              >
                <div className={s.ourBenefitsSlider__img}>
                  <Image
                    src={img}
                    alt=""
                    // dangerouslyAllowSVG={enable}
                    width={300}
                    height={300}
                  />
                </div>
                <span className={s.ourBenefitsSlider__span1_2}>{span1}</span>
                <span className={s.ourBenefitsSlider__span2_2}>{span2}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
