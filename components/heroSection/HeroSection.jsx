import Image from "next/image";
import HeroImg from "../../public/hero.jpg";
import s from "./HeroSection.module.css";
import "./HeroSection.module.css";
import BaseModal from "../modal/BaseModal";
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
              src="https://firebasestorage.googleapis.com/v0/b/kompromix.appspot.com/o/video%2FmainPageVideo.mp4?alt=media&token=d9d16e7e-6fd5-4b4d-b75d-a3ffc9886912"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
