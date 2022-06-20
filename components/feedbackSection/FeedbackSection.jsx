import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import classNames from "classnames";
import s from "./FeedbackSection.module.css";
import { EffectFlip, Autoplay, Navigation } from "swiper";
import Link from "next/link";
import RoofingIcon from "@mui/icons-material/Roofing";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SectionTitleComponent from "../sectionTitleComponent/SectionTitleComponent";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackSection({ props }) {
  return (
    <>
      <SectionTitleComponent
        title={"Відгуки"}
        subTitle={"oб'єкти до і після"}
        icon={<VolunteerActivismIcon />}
      />
      <Swiper
        navigation={true}
        speed={1000}
        allowTouchMove={false}
        effect={"flip"}
        grabCursor={true}
        modules={[Navigation, EffectFlip, Autoplay]}
        className={classNames(s.feedbackSection, "feedbackSection")}
      >
        {props.map((item, index) => {
          return (
            <SwiperSlide key={index} className={s.swiperSlider}>
              <FeedbackItem item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Link href={"/"}>
        <a className={s.feedbackSection__link}>
          {" "}
          <RoofingIcon />
          Дивитись усі об&#39;єкти
        </a>
      </Link>
    </>
  );
}
