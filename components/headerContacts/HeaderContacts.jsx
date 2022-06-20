import s from "./HeaderContacts.module.css";
import Image from "next/image";
import Logo from "../../public/logo.jpg";
import Link from "next/link";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import BaseModal from "../baseModal/BaseModal";
export default function HeaderContacts() {
  return (
    <div className={s.header__contactsSection}>
      <div className={s.contactsSection_logo}>
        <Link href={"/"}>
          <a className={s.header__nav_logo}>
            <Image
              src={Logo}
              alt="Кровельное ателье 'Komprimix'"
              role="presentation"
              width={120}
              height={100}
              layout="responsive"
            />
          </a>
        </Link>
        <span className={s.logoDesc}>
          Покрівельні роботи в Запоріжжі та Запорізькій області
        </span>
      </div>
      <div className={s.contactsSection_getTheCall}>
        <BaseModal buttonName="Зворотній дзвінок" />
        <span>Пн-пт: 8:00 - 18:00</span>
        <span>Сб: 8:00 - 14:00</span>
        <span>Нд: вихідний</span>
      </div>
      <div className={s.contactsSection_contacts}>
        <p className={s.contactsSection_contacts__link}>
          <a href="tel: +380 000 000 00">
            <CallIcon className={s.callIcon} />
            +38 097 970 73 40
          </a>
        </p>
        <p className={s.contactsSection_contacts__link}>
          <a href="mailto: zakaz@gmail.com">
            <EmailIcon className={s.emailIcon} />
            kompromix.zp@gmail.com
          </a>
        </p>
        <p className={s.contactsSection_contacts__link}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/kompromix"
          >
            <InstagramIcon className={s.instaIcon} />
            Сторінка в Instagram
          </a>
        </p>
      </div>
    </div>
  );
}
