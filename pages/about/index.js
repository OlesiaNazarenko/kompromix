import Header from "../../components/header/Header";
import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import Img1 from "../../public/AboutPage/1.jpg";
import Img2 from "../../public/AboutPage/2.jpg";
import Img3 from "../../public/AboutPage/3.jpg";
import SliderAboutPage from "../../components/sliderAboutPage/sliderAboutPage";
import s from "./About.module.css";
import BaseModal from "../../components/modal/BaseModal";
export default function About() {
  const dataImg = [Img1, Img2, Img3];
  return (
    <>
      <Head>
        <title>Kompromix. Про компанію</title>
      </Head>
      <Header />
      <section className={classNames("container", s.aboutSection)}>
        <h1>Про нас</h1>
        <p>
          Будівельна компанія "Kompromix" - це команда професіоналів, які
          відповідально ставляться до виконання своїх обов'язків та дбають про
          виконання усіх робіт вчасно. В нашій компанії працюють досвідчені
          фахівці, за плечима яких безліч готових проектів і задоволених
          клієнтів.
        </p>
        <div className={s.aboutPageWorks}>
          {dataImg.map((item) => {
            return (
              <div className={s.img}>
                <Link href={"/projects"}>
                  <Image
                    src={item}
                    width={350}
                    height={230}
                    alt="Покрівельні роботи"
                  />
                </Link>
              </div>
            );
          })}
          <div className={s.AboutDesc}>
            <div className={s.AboutDesc_text}>
              <h2>Якісні рішення</h2>
              <p>
                Ми завжди намагаємось знайти рішення, яке дозволить задовольнити
                усі потреби клієнта.
              </p>
            </div>
          </div>
          <div className={s.AboutDesc}>
            <div className={s.AboutDesc_text}>
              <h2>Відповідальність</h2>
              <p>
                Ми цінуємо довіру наших клієнтів і відповідально ставимось до
                кожного проекту - неважливо великий він чи маленький.
              </p>
            </div>
          </div>
          <div className={s.AboutDesc}>
            <div className={s.AboutDesc_text}>
              <h2>Досвід</h2>
              <p>
                Ми маємо великий досвід за плечима і застосовуємо його для
                досягнення найкращих результатів.
              </p>
            </div>
          </div>
        </div>
        <p>
          Наші працівники постійно слідкують за новими технологіями на ринку та
          проходять спеціалізоване навчання задля підвищення своєї кваліфікації.
          Для нас важливо виконувати свою роботу згідно до сучасних норм аби
          результат нашої роботи якомога довше слугував для наших кліентів.
        </p>
        <div className={s.sliderWrap}>
          <SliderAboutPage />
          <div>
            <p className={s.sliderText}>
              TextTextTextTextTextTextTextTextTextTextTextTextTextTextText
              TextTextTextTextTextTextTextTextTextTextTextTextTextTextText
              TextTextTextTextTextTextTextTextTextTextTextTextTextTextText
              TextTextTextTextTextTextTextTextTextTextTextTextTextTextText
              TextTextTextTextTextTextTextTextTextTextTextTextTextTextText
            </p>
            <p className={s.sliderText}>
              Дивіться наші роботи у розділі{" "}
              <Link href={"/projects"}>
                <a class={s.sliderLink}>"Проекти"</a>
              </Link>{" "}
              або в
              <a
                href={"https://www.instagram.com/kompromix"}
                className={s.sliderLink}
                target="_blank"
              >
                <InstagramIcon className={s.InstIcon} />
                нашому акаунті в мережі Instagram
              </a>
              .
            </p>
            <p className={s.sliderText}>
              А наші вироби та матеріали Ви можете знайти у розділі{" "}
              <Link href={"/shop"}>
                <a className={s.sliderLink}>"Магазин"</a>
              </Link>
              .
            </p>
            <p className={s.sliderText}>
              <div class={s.buttonWrap}>
                <BaseModal buttonName="Отримати консультацію" />
              </div>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
