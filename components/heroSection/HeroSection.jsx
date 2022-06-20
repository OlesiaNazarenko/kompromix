import s from "./HeroSection.module.css";
import "./HeroSection.module.css";
import BaseModal from "../baseModal/BaseModal";
import classNames from "classnames";

export default function HeroSection() {
  return (
    <section>
      <div className={s.heroSection}>
        <div className={classNames("container", s.heroSection_wrap)}>
          <h1>
            <span className={s.uppercaseWords}>Покрівельні роботи</span> в
            Запоріжжі та Запорізькій області
          </h1>
          <div className={s.buttonWrap}>
            <BaseModal buttonName="Замовити безкоштовну консультацію" />
          </div>
        </div>

        <div className={s.videoWrap}>
          <video className={s.video} autoPlay loop muted>
            <source
              type="video/mp4"
              src="https://firebasestorage.googleapis.com/v0/b/kompromix.appspot.com/o/video%2FmainPageVideo.mp4?alt=media&token=99c5b0b7-c4fd-41ef-b10b-acd9fb0dce3f"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
