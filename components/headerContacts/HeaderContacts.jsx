import s from "./HeaderContacts.module.css";
import Image from "next/image";
import Logo from "../../public/logo.jpg";
import Link from "next/link";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import BaseModal from "../modal/BaseModal";
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
        <span>Щодня з 8:00 до 20:00</span>
      </div>
      <div className={s.contactsSection_contacts}>
        <p className={s.contactsSection_contacts__link}>
          <CallIcon className={s.callIcon} />
          <a href="tel: +380 000 000 00">+38 097 970 73 40</a>
        </p>
        <p className={s.contactsSection_contacts__link}>
          <EmailIcon className={s.emailIcon} />
          <a href="mailto: zakaz@gmail.com">kompromix.zp@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
