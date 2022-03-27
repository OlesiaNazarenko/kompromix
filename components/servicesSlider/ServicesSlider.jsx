import s from "./ServicesSlider.module.css";
import "react-alice-carousel/lib/alice-carousel.css";
import classNames from "classnames";
import Slider from "../slider/Slider";
import HandymanIcon from "@mui/icons-material/Handyman";
export default function ServicesSlider() {
  return (
    <>
      <section className={classNames("services", s.services)}>
        <div className={s.services__descWrap}>
          <HandymanIcon className={s.services__icon} />
          <div className={s.services__textWrap}>
            <h1 className={s.textWrap__title}>Послуги</h1>
            <span className={s.textWrap__desc}>Що ми пропонуємо?</span>
          </div>
        </div>
        <Slider />
      </section>
    </>
  );
}
