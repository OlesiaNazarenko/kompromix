import s from "./HeaderContacts.module.css";
import Image from "next/image";
import Logo from "../../public/logo.jpg";
import Link from "next/link";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
export default function HeaderContacts() {
  return (
    <div class={s.header__contactsSection}>
      <div class={s.contactsSection_logo}>
        <Link href={"/"}>
          <a class={s.header__nav_logo}>
            <Image
              src={Logo}
              alt="Кровельное ателье 'Komprimix'"
              role="presentation"
              width={120}
              height={100}
            />
          </a>
        </Link>
        <span class={s.logoDesc}>
          Покрівельні роботи в Запоріжжі та Запорізькій області
        </span>
      </div>
      <div class={s.contactsSection_getTheCall}>
        <input
          type="button"
          class={s.buttonGetTheCall}
          value="Зворотній дзвінок"
        />
        <span>Щодня з 8:00 до 20:00</span>
      </div>
      <div class={s.contactsSection_contacts}>
        <p class={s.contactsSection_contacts__link}>
          <CallIcon className={s.callIcon} />
          <a href="tel: +380 000 000 00">+38 097 970 73 40</a>
        </p>
        <p class={s.contactsSection_contacts__link}>
          <EmailIcon className={s.emailIcon} />
          <a href="mailto: zakaz@gmail.com">zakaz@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
