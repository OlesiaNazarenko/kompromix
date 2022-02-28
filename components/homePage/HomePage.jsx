import s from "./HomePage.module.css";
import PeopleIcon from "@mui/icons-material/People";
import HandymanIcon from "@mui/icons-material/Handyman";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
export default function HomePage() {
  return (
    <section className="container">
      <h1 className={s.title}>Kompomix це:</h1>
      <div className={s.qualitiesWrap}>
        <div className={s.qualitiesWrap__box}>
          <AutoFixHighIcon className={s.qualitiesWrap__icon} />
          <h2>Увага до деталей</h2>
          <p>
            Ми враховуємо всі потреби наших клієнтів, аби досягнути бажаного
            результату.{" "}
          </p>
        </div>
        <div className={s.qualitiesWrap__box}>
          <HandymanIcon className={s.qualitiesWrap__icon} />
          <h2>Працьовитість і старанність</h2>
          <p>
            Обидві ці чесноти допомагають нам у прагненні виконати свою роботу
            на всі 100!
          </p>
        </div>
        <div className={s.qualitiesWrap__box}>
          <AvTimerIcon className={s.qualitiesWrap__icon} />
          <h2>Сучасні стандарти</h2>
          <p>
            Наші спеціалісти постійно вивчають та використовують у роботі нові
            сучасні технологіі.
          </p>
        </div>
        <div className={s.qualitiesWrap__box}>
          <PeopleIcon className={s.qualitiesWrap__icon} />
          <h2>Надійність</h2>
          <p>
            Наша робота - це в першу черту, відповідальність для нас. Ми дуже
            цінуємо довіру наших клієнтів, адже вона – наша головна цінність.
          </p>
        </div>
      </div>
    </section>
  );
}
