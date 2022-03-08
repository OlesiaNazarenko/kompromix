import s from "./Footer.module.css";
import Image from "next/image";
import Logo from "../../public/logo.jpg";
import Link from "next/link";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "../headerContacts/HeaderContacts.module.css";
import classNames from "classnames";
export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={classNames("container", s.footerWrap)}>
        <div
          className={classNames(
            styles.contactsSection_logo,
            s.contactsSection_logo
          )}
        >
          <Link href={"/"}>
            <a className={styles.header__nav_logo}>
              <Image
                src={Logo}
                alt="Кровельное ателье 'Komprimix'"
                role="presentation"
                width={120}
                height={100}
              />
            </a>
          </Link>
          <span className={s.logoDesc}>
            Покрівельні роботи в Запоріжжі та Запорізькій області
          </span>
        </div>
        <ul className={s.footer__nav_list}>
          <li className={s.nav_list__item}>
            <Link href={"/"}>
              <a className={s.nav_list__link}>Головна</a>
            </Link>
          </li>
          <li className={s.nav_list__item}>
            <Link href={"/about"}>
              <a className={s.nav_list__link}>Про компанію</a>
            </Link>
          </li>
          <li className={s.nav_list__item}>
            <Link href={"/projects"}>
              <a className={(s.dropdown, s.nav_list__link)}>Проекти</a>
            </Link>
          </li>
          <li className={s.nav_list__item}>
            <Link href={"/shop"}>
              <a className={s.nav_list__link}>Магазин</a>
            </Link>
          </li>
          <li className={s.nav_list__item}>
            <Link href={"/contacts"}>
              <a className={s.nav_list__link}>Контакти</a>
            </Link>
          </li>
        </ul>

        <ul className={s.footer__nav_list}>
          <li className={s.nav_list__item}>
            <Link href={"/projects/roofing"}>
              <a className={s.nav_list__link}>Покрівельні роботи</a>
            </Link>
          </li>
          <li className={s.nav_list__item}>
            <Link href={"/projects/tin"}>
              <a className={s.nav_list__link}>Бляшані роботи</a>
            </Link>
          </li>
          <li className={s.nav_list__item}>
            <Link href={"/projects"}>
              <a className={(s.dropdown, s.nav_list__link)}>
                Руйнування від вологи
              </a>
            </Link>
          </li>
          <li className={s.nav_list__item}>
            <Link href={"/projects"}>
              <a className={s.nav_list__link}>Ковпаки на заборонні стовбчики</a>
            </Link>
          </li>
          <li className={s.nav_list__item}>
            <Link href={"/projects"}>
              <a className={s.nav_list__link}>Парапети</a>
            </Link>
          </li>
          <li className={s.nav_list__item}>
            <Link href={"/projects"}>
              <a className={s.nav_list__link}>Відливи віконні</a>
            </Link>
          </li>
        </ul>
        <div className={s.linkBox}>
          <a className={s.linkBox__link} href="tel:+380969403113">
            <CallIcon className={s.linkBox__icon} /> +380969403113
          </a>
          <a className={s.linkBox__link} href="mailto:kompromix.zp@gmail.com">
            <EmailIcon className={s.linkBox__icon} />
            kompromix.zp@gmail.com
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className={s.linkBox__link}
            href="https://www.instagram.com/kompromix"
          >
            <InstagramIcon className={s.linkBox__icon} /> Сторінка в Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
