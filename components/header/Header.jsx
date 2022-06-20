import s from "./Header.module.css";
import Link from "next/link";
import HeaderContacts from "../headerContacts/HeaderContacts";
import mainNavigation from "./MainNavigation";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();
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
        <ul className={s.header__nav_list}>
          {mainNavigation.map((navLink, index) => {
            return (
              <li
                className={
                  pathname === navLink.path
                    ? [s.nav_list__item, s.activeLink].join(" ")
                    : s.nav_list__item
                }
                key={index}
              >
                <Link href={navLink.path}>
                  <a className={(s.dropdown, s.nav_list__link)}>
                    {navLink.title}
                  </a>
                </Link>

                {navLink.subList && (
                  <div className={s.navSublist}>
                    <div className={s.navSublist__desc}>
                      <div className={s.navSublist__desc_icon}>
                        {navLink.subList.icon}
                      </div>

                      <div className={s.navSublist__desc_wrap}>
                        <h2 className={s.navSublist__desc_text}>
                          {navLink.subList.title}
                        </h2>
                        <span className={s.feedbackLink_desc}>
                          {navLink.subList.subTitle}
                        </span>
                        <Link href={navLink.subList.linkPath}>
                          <a className={s.navSublist__desc_link}>
                            {navLink.subList.link}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <ul className={s.nav_list__sublist}>
                      {navLink.subList.linksList &&
                        navLink.subList.linksList.map((links, index) => {
                          return (
                            <li className={s.sublist__item} key={index}>
                              <Link href={links.path}>
                                <a className={s.sublist__item_link}>
                                  <div className={s.sublistItemIcon}>
                                    {links.icon}
                                  </div>
                                  {links.title}
                                </a>
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
