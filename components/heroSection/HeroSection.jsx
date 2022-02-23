import Image from "next/image";
import HeroImg from "../../public/hero.jpg";
import s from "./HeroSection.module.css";
export default function HeroSection() {
  return (
    <section className="container">
      <div class={s.heroSection}>
        <div class={s.heroSection_wrap}>
          <div class={s.heroSection_desc}>
            <h1>Якісні вироби і виконання робіт з монтажу</h1>
            <p>Ми доведемо, що наша пропоцизія краща! </p>
          </div>
          <input
            type="button"
            class={s.buttonGetTheCall}
            value="Замовити безкоштовну консультацію"
          />
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
    </section>
  );
}
