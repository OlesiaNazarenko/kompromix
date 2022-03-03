import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./sliderAboutPage.module.css";
import { Pagination } from "swiper";
import Img1 from "../../public/sliderAboutPage/1.jpg";
import Img2 from "../../public/sliderAboutPage/2.jpg";
import Img3 from "../../public/sliderAboutPage/3.jpg";
import Img4 from "../../public/sliderAboutPage/4.jpg";
import Img5 from "../../public/sliderAboutPage/5.jpg";
import Image from "next/image";
export default function sliderAboutPage() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <Image src={Img1} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Img2} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Img3} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Img4} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Img5} />
      </SwiperSlide>
    </Swiper>
  );
}
