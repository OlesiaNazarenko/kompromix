import Header from "../../components/header/Header";
import Head from "next/head";
import Footer from "../../components/footer/Footer";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import classNames from "classnames";
import s from "./Contacts.module.css";
export default function Contacts() {
  return (
    <>
      <Head>
        <title>Kompromix.Контакты</title>
      </Head>
      <Header />
      <section className={classNames("container", "firstSection")}>
        <div className={s.titleBox}>
          <ConnectWithoutContactIcon className={s.contactsIcon} />
          <div className={s.titleBox__textBox}>
            <h1>Контакти</h1>
            <p>Як з нами зв&#39;язатися?</p>
          </div>
        </div>
        <div className={s.contactsWrap}>
          <div className={s.contactsWrap__box}>
            <p>
              <b>Олександр</b>
            </p>
            <a className={s.contactWrap__link} href="tel:+380979707340">
              <CallIcon className={s.CallIcon} /> +380979707340
            </a>
            <a className={s.contactWrap__link} href="mailto:2888zp@gmail.com">
              <EmailIcon className={s.EmailIcon} />
              2888zp@gmail.com
            </a>
          </div>
          <div className={s.contactsWrap__box}>
            <p>
              <b>Сергій</b>
            </p>
            <a className={s.contactWrap__link} href="tel:+380969403113">
              <CallIcon className={s.CallIcon} /> +380969403113
            </a>
            <a
              className={s.contactWrap__link}
              href="mailto:kompromix.zp@gmail.com"
            >
              <EmailIcon className={s.EmailIcon} />
              kompromix.zp@gmail.com
            </a>
          </div>
        </div>
        <p>
          Відвідайте нашу
          <a
            target="_blank"
            rel="noreferrer"
            className={s.InstLink}
            href="https://www.instagram.com/kompromix"
          >
            {" "}
            сторінку в Instagram
          </a>
          , там ви знайдете більше фото наших робіт. Підписуйтесь на{" "}
          <a
            className={s.InstLink}
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/kompromix"
          >
            профіль
            <InstagramIcon className={s.InstIcon} />
          </a>
          , аби слідкувати за актуальніми новинами.
        </p>
        <a
          className={s.InstLink}
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/kompromix"
        >
          Перейти до профілю Kompromix в Instagram &#8594;{" "}
          <InstagramIcon className={s.InstIcon} /> .
        </a>
      </section>
      <Footer />
    </>
  );
}
