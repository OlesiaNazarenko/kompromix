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
      <ul className={s.infoWindow__detailsList}>
        {data.details &&
          data.details.map((item, index) => {
            return (
              <>
                {item.year && (
                  <li key={index}>
                    <i>Рік:</i> <span>{item.year}</span>
                  </li>
                )}
                {item.period && (
                  <li key={index}>
                    <i>Термін виконання:</i> <span>{item.period}</span>
                  </li>
                )}
              </>
            );
          })}
      </ul>
    </acticle>
  );
}
