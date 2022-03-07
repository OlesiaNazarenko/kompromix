import s from "./Header.module.css";
import Link from "next/link";
import HeaderContacts from "../headerContacts/HeaderContacts";
import RoofingIcon from "@mui/icons-material/Roofing";
import PermDataSettingOutlinedIcon from "@mui/icons-material/PermDataSettingOutlined";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
export default function Header() {
  return (
    <header class={s.header}>
      <div className={s.mobileMenu}>
        <Link href={"/"}>
          <a class={s.mobileMenu__link}>Kompromix</a>
        </Link>
        <BurgerMenu width={"auto"} />
      </div>
      <div className="container">
        <HeaderContacts />
      </div>
      <nav class={s.header__nav}>
        <div className="container">
          <ul class={s.header__nav_list}>
            <li class={s.nav_list__item}>
              <Link href={"/"}>
                <a class={s.nav_list__link}>Головна</a>
              </Link>
            </li>
            <li class={s.nav_list__item}>
              <Link href={"/about"}>
                <a class={s.nav_list__link}>Про компанію</a>
              </Link>
            </li>
            <li class={s.nav_list__item}>
              <Link href={"/projects"}>
                <a class={(s.dropdown, s.nav_list__link)}>Проекти</a>
              </Link>
              <div class={s.navSublist}>
                <div class={s.navSublist__desc}>
                  <MapsHomeWorkIcon className={s.navSublist__desc_icon} />
                  <h2 class={s.navSublist__desc_text}>Наші роботи</h2>
                </div>
                <ul class={s.nav_list__sublist}>
                  <li class={s.sublist__item}>
                    <Link href={"/projects/roofing"}>
                      <a class={s.sublist__item_link}>
                        <RoofingIcon className={s.sublistItemIcon} />
                        Покрівельні роботи
                      </a>
                    </Link>
                  </li>
                  <li class={s.sublist__item}>
                    <Link href={"/projects/tin"}>
                      <a class={s.sublist__item_link}>
                        <PermDataSettingOutlinedIcon
                          className={s.sublistItemIcon}
                        />
                        Бляшані роботи
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li class={s.nav_list__item}>
              <Link href={"/shop"}>
                <a class={s.nav_list__link}>Магазин</a>
              </Link>
            </li>
            <li class={s.nav_list__item}>
              <Link href={"/contacts"}>
                <a class={s.nav_list__link}>Контакти</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
