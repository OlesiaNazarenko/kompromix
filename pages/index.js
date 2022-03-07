import Header from "../components/header/Header";
import Head from "next/head";
import HeroSection from "../components/heroSection/HeroSection";
import Footer from "../components/footer/Footer";
import HomePage from "../components/homePage/HomePage";

export default function Index() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>
          Kompromix - кровельные и жестяные работы. Продажа материалов для
          кровли. Запорожье
        </title>
        <meta
          name="keywords"
          content="кровля Запорожье, Запорожье кровельные работы, кровельные работы в Запорожье, жестяные работы Запорожье, кровельные работы Kompromix, Kompromix Запорожье, продажа материалов для кровли, купить материалы для кровли Запорожье"
        />
        <meta
          name="description"
          content="Кровельные и жестяные работы в Запорожье, продажа материалов для кровельных и жестяных работ"
        />
      </Head>
      <Header />

      <HeroSection />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
