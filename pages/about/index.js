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
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import SliderAboutPage from "../../components/sliderAboutPage/SliderAboutPage";
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
      <section
        className={classNames("container", s.aboutSection, "firstSection")}
      >
        <h1>
          <ArtTrackIcon className={s.aboutPageIcon} />
          Про нас
        </h1>
        <p>
          Будівельна компанія &ldquo;Kompromix&rdquo; - це команда
          професіоналів, які відповідально ставляться до виконання своїх
          обов&#39;язків та дбають про виконання усіх робіт вчасно. В нашій
          компанії працюють досвідчені фахівці, за плечима яких безліч готових
          проектів і задоволених клієнтів.
        </p>
        <div className={s.aboutPageWorks}>
          {dataImg.map((item, index) => {
            return (
              <div className={s.img} key={index}>
                <Link href={"/projects"} passHref>
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
              TextTextText TextTextTextTextText TextTextTextText TextTextText
              TextTextTextText TextTextTextText TextTextTextTextText TextText
              TextTextTextTextText TextTextTextTextText TextTextTextTextText
              TextTextTextText TextTextTextTextText TextTextTextText TextText
              TextTextText
            </p>
            <p className={s.sliderText}>
              Дивіться наші роботи у розділі{" "}
              <Link href={"/projects"}>
                <a className={s.sliderLink}>&ldquo;Проекти&rdquo;</a>
              </Link>{" "}
              або в
              <a
                href={"https://www.instagram.com/kompromix"}
                className={s.sliderLink}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                нашому акаунті в мережі Instagram
                <InstagramIcon className={s.InstIcon} />
              </a>
              .
            </p>
            <p className={s.sliderText}>
              А наші вироби та матеріали Ви можете знайти у розділі{" "}
              <Link href={"/shop"}>
                <a className={s.sliderLink}>&ldquo;Магазин&rdquo;</a>
              </Link>
              .
            </p>
            <p className={s.sliderText}>
              <div className={s.buttonWrap}>
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
