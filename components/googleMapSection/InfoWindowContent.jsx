import { Link } from "@mui/material";
import Image from "next/image";
import s from "./GoogleMapSection.module.css";

import ReadMoreIcon from "@mui/icons-material/ReadMore";
export default function InfoWindowContent({ data }) {
  return (
    <acticle className={s.infoWindow}>
      <Image src={data.img} alt="" width={210} height={150} />
      <ol className={s.infoWindow__servicesList}>
        {data.services.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
      <Link href="/" className={s.infoWindow__nextLink}>
        <a className={s.infoWindow__link}>
          <ReadMoreIcon />
        </a>
      </Link>
      {data.details && (
        <ul className={s.infoWindow__detailsList}>
          <li>
            <i>Рік:</i> <span>{data.details.year}</span>
          </li>
          <li>
            <i>Термін виконання:</i> <span>{data.details.period}</span>
          </li>
        </ul>
      )}
    </acticle>
  );
}
