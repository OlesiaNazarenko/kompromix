import s from "./Header.module.css";
import Link from "next/link";
import HeaderContacts from "../headerContacts/HeaderContacts";
import RoofingIcon from "@mui/icons-material/Roofing";
import PermDataSettingOutlinedIcon from "@mui/icons-material/PermDataSettingOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import GroupsIcon from "@mui/icons-material/Groups";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import ForumIcon from "@mui/icons-material/Forum";
import CommentIcon from "@mui/icons-material/Comment";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import classNames from "classnames";
export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.mobileMenu}>
        <Link href={"/"}>
          <a className={s.mobileMenu__link}>Kompromix</a>
        </Link>
        <BurgerMenu width={"100%"} />
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
                  <div className={s.navSublist__desc_wrap}>
                    <h2 className={s.navSublist__desc_text}>Проекти</h2>
                    <span className={s.feedbackLink_desc}>Наші роботи</span>
                    <Link href={"/"}>
                      <a className={s.navSublist__desc_link}>детальніше</a>
                    </Link>
                  </div>
                </div>
                <ul className={s.nav_list__sublist}>
                  <li className={s.sublist__item}>
                    <Link href={"/projects/roofing"}>
                      <a className={s.sublist__item_link}>
                        <PhotoSizeSelectActualIcon
                          className={s.sublistItemIcon}
                        />
                        Галерея робіт
                      </a>
                    </Link>
                  </li>
                  <li className={s.sublist__item}>
                    <Link href={"/projects/tin"}>
                      <a className={s.sublist__item_link}>
                        <LocationOnIcon className={s.sublistItemIcon} />
                        Географія об&#39;єктів
                      </a>
                    </Link>
                  </li>
                  <li className={s.sublist__item}>
                    <Link href={"/projects/tin"}>
                      <a className={s.sublist__item_link}>
                        <RoofingIcon className={s.sublistItemIcon} />
                        Покрівлі до і після
                      </a>
                    </Link>
                  </li>
                  <li className={s.sublist__item}>
                    <Link href={"/projects/tin"}>
                      <a className={s.sublist__item_link}>
                        <PermDataSettingOutlinedIcon
                          className={s.sublistItemIcon}
                        />
                        Окремі вузли у покрівлі
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
              <Link href={"/shop"}>
                <a className={s.nav_list__link}>Відгуки</a>
              </Link>
              <div className={s.navSublist}>
                <div className={s.navSublist__desc}>
                  <ForumIcon className={s.navSublist__desc_icon} />
                  <div className={s.navSublist__desc_wrap}>
                    <h2 className={s.navSublist__desc_text}>Відгуки</h2>
                    <span className={s.feedbackLink_desc}>
                      Враження наших клієнтів
                    </span>
                    <Link href={"/"}>
                      <a className={s.navSublist__desc_link}>детальніше</a>
                    </Link>
                  </div>
                </div>
                <ul className={s.nav_list__sublist}>
                  <li className={s.sublist__item}>
                    <Link href={"/projects/roofing"}>
                      <a className={s.sublist__item_link}>
                        <CommentIcon className={s.sublistItemIcon} />
                        Текстові відгуки
                      </a>
                    </Link>
                  </li>
                  <li className={s.sublist__item}>
                    <Link href={"/projects/tin"}>
                      <a className={s.sublist__item_link}>
                        <SlowMotionVideoIcon className={s.sublistItemIcon} />
                        Відео відгуки
                      </a>
                    </Link>
                  </li>
                  <li className={s.sublist__item}>
                    <Link href={"/projects/tin"}>
                      <a className={s.sublist__item_link}>
                        <GroupsIcon className={s.sublistItemIcon} />
                        Відділ якості
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
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
