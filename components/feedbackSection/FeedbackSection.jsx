import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import classNames from "classnames";
import styles from "../servicesSlider/ServicesSlider.module.css";
import s from "./FeedbackSection.module.css";
import { EffectFlip, Autoplay, Navigation } from "swiper";
import Image from "next/image";
import BeforeAfterSlider from "../beforeAfterSlider/BeforeAfterSlider";
import PaidIcon from "@mui/icons-material/Paid";
import RoofingIcon from "@mui/icons-material/Roofing";
import textFeedback from "../../json/textFeedback.json";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function FeedbackSection() {
  const [slide, setSlide] = useState([]);
  useEffect(() => {
    const { slides } = textFeedback;
    setSlide(slides);
  }, [slide]);

  return (
    <>
      <div
        className={classNames(
          s.feedbackSection__constantBox,
          styles.services__descWrap
        )}
      >
        <div className={s.feedbackSection__constantBox_img}>
          <Image
            className={s.icon}
            src={"/feedbacks/mainIcon.svg"}
            layout="responsive"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className={styles.services__textWrap}>
          <h1 className={styles.textWrap__title}>Відгуки</h1>
          <p className={styles.textWrap__desc}>Об&#39;єкти до і після</p>
        </div>
      </div>
      <Swiper
        navigation={true}
        speed={1000}
        allowTouchMove={false}
        effect={"flip"}
        grabCursor={true}
        modules={[Navigation, EffectFlip, Autoplay]}
        className={classNames(s.feedbackSection, "feedbackSection")}
      >
        {slide.map((item) => {
          return (
            <SwiperSlide className={s.swiperSlider}>
              <div className={s.beforeAfter}>
                <BeforeAfterSlider
                  className={s.beforeAfter_slider}
                  {...item.images}
                />
              </div>
              <div className={s.textFeedback}>
                <h4>{item.userName}</h4>
                <p>{item.textFeedback}</p>
                <table className={s.feedbackSection_table}>
                  <tr className={s.tableRow}>
                    <td>
                      <RoofingIcon
                        width={24}
                        height={24}
                        className={s.tableIcon}
                      />
                    </td>
                    <td>{item.service}</td>
                  </tr>
                  <tr className={s.tableRow}>
                    <td>
                      <LocationOnIcon
                        width={24}
                        height={24}
                        className={s.tableIcon}
                      />
                    </td>
                    <td>{item.location}</td>
                  </tr>
                  <tr className={s.tableRow}>
                    <td>
                      <SquareFootIcon
                        width={24}
                        height={24}
                        className={s.tableIcon}
                      />
                    </td>
                    <td>{item.square}m&#178;</td>
                  </tr>
                  <tr className={s.tableRow}>
                    <td>
                      <PaidIcon
                        width={24}
                        height={24}
                        className={s.tableIcon}
                      />
                    </td>
                    <td>{item.payment}</td>
                  </tr>
                </table>
                <div className={s.userIcon}>
                  <Image
                    src={item.userIcon}
                    alt=""
                    width={50}
                    height={50}
                    layout="responsive"
                  ></Image>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
