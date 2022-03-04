import Header from "../../components/header/Header";
import Head from "next/head";
import classNames from "classnames";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import SliderAboutPage from "../../components/sliderAboutPage/sliderAboutPage";
import s from "./About.module.css";
export default function About() {
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
        <SliderAboutPage />
      </section>
      <Footer />
    </>
  );
}
