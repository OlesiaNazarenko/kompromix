import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import BaseModal from "../baseModal/BaseModal";
import s from "./BurgerMenu.module.css";
export default function BurgerMenu(props) {
  return (
    <Menu {...props} right>
      <Link href="/">
        <a className="menu-item">Головна</a>
      </Link>

      <Link href="/about">
        <a className="menu-item">Про компанію</a>
      </Link>

      <Link href="/projects">
        <a className="menu-item">Проекти</a>
      </Link>

      <Link href="/feedbacks">
        <a className="menu-item">Відгуки</a>
      </Link>
      <Link href="/contacts">
        <a className="menu-item">Контакти</a>
      </Link>
      <div className={s.contactsSection_contacts}>
        <p>
          <a href="tel: +380 000 000 00">+38 097 970 73 40</a>
        </p>
        <p>
          <a href="mailto: zakaz@gmail.com">kompromix.zp@gmail.com</a>
        </p>
      </div>
      <div>
        <BaseModal buttonName="Зворотній дзвінок" />
      </div>
    </Menu>
  );
}
