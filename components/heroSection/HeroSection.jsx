import Image from "next/image";
import HeroImg from "../../public/hero.jpg";
import s from "./HeroSection.module.css";
import "./HeroSection.module.css";
import BaseModal from "../modal/BaseModal";
export default function HeroSection() {
  return (
    <section className="container">
      <div class={s.heroSection}>
        <div class={s.heroSection_wrap}>
          <div class={s.heroSection_desc}>
            <h1>Ми гарантуємо 100%:</h1>
            <ul class={s.heroSection__list}>
              <li>- якісні вироби;</li>
              <li>- виконання робіт з монтажу.</li>
            </ul>
            <p>Ви переконаєтесь, що наша пропоцизія краща! </p>
          </div>
        </div>
        <Image
          src={HeroImg}
          alt="Кровельные работы"
          role="presentation"
          width={800}
          height={400}
          placeholder="blur"
          className={s.heroImg}
        />
      </div>
      <div class={s.buttonWrap}>
        <BaseModal buttonName="Замовити безкоштовну консультацію" />
      </div>
    </section>
  );
}
