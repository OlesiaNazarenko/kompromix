import Header from "../../components/header/Header";
import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";
import Footer from "../../components/footer/Footer";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import OurWorkers from "../../components/ourWorkers/OurWorkers";
import s from "./About.module.css";
import BaseModal from "../../components/baseModal/BaseModal";
import AboutCompanySlider from "../../components/aboutCompanySlider/AboutCompanySlider";
import db from "../../db/db";
import { collection, getDocs } from "firebase/firestore";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";

export default function About({ aboutCompanySlides, ourWorkersSlides }) {
  return (
    <>
      <Head>
        <title>Kompromix. Про компанію</title>
      </Head>
      <Header />
      <section
        className={classNames("container", s.aboutSection, "firstSection")}
      >
        <div className="linksFlowWrap">
          <Link href={"/"}>
            <a>Головна</a>
          </Link>
          <ArrowForwardIosIcon className="linksFlowArrow" />
          <Link href={"/about"}>
            <a>Про компанію</a>
          </Link>
        </div>
        <SectionTitleComponent
          title={"Про нас"}
          subTitle={"команда професіоналів"}
          icon={<AccountBoxIcon />}
        />
        <p>
          Будівельна компанія &ldquo;Kompromix&rdquo; - це команда
          професіоналів, які відповідально ставляться до виконання своїх
          обов&#39;язків та дбають про виконання усіх робіт вчасно. В нашій
          компанії працюють досвідчені фахівці, за плечима яких безліч готових
          проектів і задоволених клієнтів.
        </p>

        <AboutCompanySlider props={aboutCompanySlides} />

        <p>
          Наші працівники постійно слідкують за новими технологіями на ринку та
          проходять спеціалізоване навчання задля підвищення своєї кваліфікації.
          Для нас важливо виконувати свою роботу згідно до сучасних норм аби
          результат нашої роботи якомога довше слугував для наших кліентів.
        </p>
        <p>
          TextTextText TextTextTextTextText TextTextTextText TextTextText
          TextTextTextText TextTextTextText TextTextTextTextText TextText
          TextTextTextTextText TextTextTextTextText TextTextTextTextText
          TextTextTextText TextTextTextTextText TextTextTextText TextText
          TextTextText
        </p>

        <OurWorkers props={ourWorkersSlides} />
        <div>
          <p>
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
          </p>
          <p>
            А наші вироби та матеріали Ви можете знайти у розділі{" "}
            <Link href={"/shop"}>
              <a className={s.sliderLink}>&ldquo;Магазин&rdquo;</a>
            </Link>
            .
          </p>
          <p>
            <div className={s.buttonWrap}>
              <BaseModal buttonName="Отримати консультацію" />
            </div>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  let aboutCompanySlides = [];
  const getAboutCompanySlides = await getDocs(
    collection(db, "aboutCompanySlider")
  );
  getAboutCompanySlides.forEach((doc) => {
    aboutCompanySlides = Object.values(doc.data());
  });

  let ourWorkersSlides = [];
  const getOurWorkersSlides = await getDocs(collection(db, "workers"));
  getOurWorkersSlides.forEach((doc) => {
    ourWorkersSlides = Object.values(doc.data());
  });

  return {
    props: {
      aboutCompanySlides,
      ourWorkersSlides,
    },
  };
}
