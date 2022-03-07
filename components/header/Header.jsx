import s from "./Header.module.css";
import Link from "next/link";
import HeaderContacts from "../headerContacts/HeaderContacts";
import RoofingIcon from "@mui/icons-material/Roofing";
import PermDataSettingOutlinedIcon from "@mui/icons-material/PermDataSettingOutlined";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.mobileMenu}>
        <Link href={"/"}>
          <a className={s.mobileMenu__link}>Kompromix</a>
        </Link>
        <BurgerMenu width={"auto"} />
      </div>
      <div className="container">
        <HeaderContacts />
      </div>
      <nav className={s.header__nav}>
        <div className="container">
          <ul className={s.header__nav_list}>
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
              <div className={s.navSublist}>
                <div className={s.navSublist__desc}>
                  <MapsHomeWorkIcon className={s.navSublist__desc_icon} />
                  <h2 className={s.navSublist__desc_text}>Наші роботи</h2>
                </div>
                <ul className={s.nav_list__sublist}>
                  <li className={s.sublist__item}>
                    <Link href={"/projects/roofing"}>
                      <a className={s.sublist__item_link}>
                        <RoofingIcon className={s.sublistItemIcon} />
                        Покрівельні роботи
                      </a>
                    </Link>
                  </li>
                  <li className={s.sublist__item}>
                    <Link href={"/projects/tin"}>
                      <a className={s.sublist__item_link}>
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
        </div>
      </nav>
    </header>
  );
}
