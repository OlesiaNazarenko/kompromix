import Header from "../components/header/Header";
import Head from "next/head";
import HeroSection from "../components/heroSection/HeroSection";
import Footer from "../components/footer/Footer";
import HomePage from "../components/homePage/HomePage";
import db from "/db/db";
import { collection, getDocs } from "firebase/firestore";
export default function Index(props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>
          Kompromix - покрівельні та жестяні роботи. Продаж матеріалів для
          покрівлі. Запоріжжя
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
        <HomePage props={props} />
      </main>
      <Footer />
    </>
  );
}
export async function getServerSideProps() {
  let servicesSlides = [];
  const getServicesSlides = await getDocs(collection(db, "servicesSlider"));
  getServicesSlides.forEach((doc) => {
    servicesSlides = doc.data().slides;
  });

  let ourWorkersSlides = [];
  const getourWorkersSlides = await getDocs(collection(db, "workers"));
  getourWorkersSlides.forEach((doc) => {
    ourWorkersSlides = Object.values(doc.data());
  });

  let ourBenefitsSlides = [];
  const getourBenefitsSlides = await getDocs(collection(db, "ourBenefits"));
  getourBenefitsSlides.forEach((doc) => {
    ourBenefitsSlides = doc.data().slides;
  });

  let worksGallerySlides = [];
  const getWorksGallerySlides = await getDocs(
    collection(db, "worksGalleryImages")
  );
  getWorksGallerySlides.forEach((doc) => {
    worksGallerySlides = doc.data().image;
  });

  let feedbacksSlides = [];
  const getFeedbacksSlides = await getDocs(collection(db, "textFeedbacks"));
  getFeedbacksSlides.forEach((doc) => {
    feedbacksSlides = doc.data().slides;
  });

  let markersData = [];
  const getMarkersData = await getDocs(collection(db, "mapMarks"));
  getMarkersData.forEach((doc) => {
    markersData = doc.data().marks;
  });

  return {
    props: {
      ourBenefitsSlides,
      ourWorkersSlides,
      servicesSlides,
      worksGallerySlides,
      feedbacksSlides,
      markersData,
    },
  };
}
