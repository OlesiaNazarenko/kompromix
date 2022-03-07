import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

import s from "./BurgerMenu.module.css";
export default (props) => {
  return (
    <Menu {...props} right>
      <Link href="/">
        <a class="menu-item">Головна</a>
      </Link>

      <Link href="/about">
        <a class="menu-item">Про компанію</a>
      </Link>

      <Link href="/projects">
        <a class="menu-item">Проекти</a>
      </Link>

      <Link href="/shop">
        <a class="menu-item">Магазин</a>
      </Link>
      <Link href="/contacts">
        <a class="menu-item">Контакти</a>
      </Link>
      <div class={s.contactsSection_contacts}>
        <p class={s.contactsSection_contacts__link}>
          <a href="tel: +380 000 000 00">+38 097 970 73 40</a>
        </p>
        <p class={s.contactsSection_contacts__link}>
          <a href="mailto: zakaz@gmail.com">kompromix.zp@gmail.com</a>
        </p>
      </div>
    </Menu>
  );
};
