import s from "./HomePage.module.css";
import PeopleIcon from "@mui/icons-material/People";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import Image from "next/image";
import RoofingElements from "../../public/details.jpg";

import KeyRoof from "../../public/keyRoof.jpg";
import classNames from "classnames";
import ServicesSlider from "../servicesSlider/ServicesSlider";
import BaseModal from "../modal/BaseModal";
export default function HomePage() {
  return (
    <>
      <section className={s.homePageWrap}>
        <div className="container">
          <ServicesSlider />
        </div>
      </section>
    </>
  );
}
