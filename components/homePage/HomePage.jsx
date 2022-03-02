import s from "./HomePage.module.css";
import PeopleIcon from "@mui/icons-material/People";
import HandymanIcon from "@mui/icons-material/Handyman";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import classNames from "classnames";
import Slider from "../slider/Slider";
import Image from "next/image";
import RoofingElements from "../../public/details.jpg";
import BoxImage1 from "../../public/details/planka-konka-ploskogo.jpg";
import BoxImage2 from "../../public/details/2.png";
import BoxImage3 from "../../public/details/3.png";
import BoxImage4 from "../../public/details/4.png";
import BoxImage5 from "../../public/details/5.jpg";
import BoxImage6 from "../../public/details/6.png";
import BoxImage7 from "../../public/details/7.png";
import "react-alice-carousel/lib/alice-carousel.css";
export default function HomePage() {
  return (
    <>
      <section className={classNames("container", s.qualities)}>
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
      <section className={classNames(s.services)}>
        <div className="container">
          <h2>Що ми можемо зробити для Вас?</h2>
          <div className={s.services__roofingElements}>
            <div className={s.RoofingElementsImg}>
              <Image
                src={RoofingElements}
                alt="Кровельные работы"
                role="presentation"
                width={500}
                height={400}
              />
            </div>
            <h3>Покрівельні фасонні елементи</h3>
            <p>
              Ряд комплектуючих і добірних елементів, обов'язково необхідний для
              монтажу покрівельних систем.{" "}
            </p>

            {/* <div className={s.services__boxes}> */}
            <div className={classNames(s.services__box, s.box1)}>
              <Image
                src={BoxImage1}
                width={90}
                height={40}
                className={s.boxImg}
              />
              <h4 className={s.boxTitle}>Конькова планка</h4>
              <p className={s.boxDesc}>
                Необхідна для запобігання потраплянню дощової та талої води в
                місцях перетину схилу з сусіднім або протилежним. Кріпляться
                коньки на покрівлі за допомогою саморізів.
              </p>
            </div>
            <div className={classNames(s.services__box, s.box2)}>
              <Image
                src={BoxImage2}
                width={90}
                height={60}
                className={s.boxImg}
              />
              <h4 className={s.boxTitle}>Планка примикання</h4>
              <p className={s.boxDesc}>
                Планка примикання або стіновий захист - металевий кутник,
                основним завданням якого є облаштування місць примикання
                покрівлі зі стінами та іншими спорудами(коминами, баштами та
                ін.)
              </p>
            </div>
            <div className={classNames(s.services__box, s.box3)}>
              <Image
                src={BoxImage3}
                width={90}
                height={60}
                className={s.boxImg}
              />
              <h4 className={s.boxTitle}>Єндова(жолоб)</h4>
              <p className={s.boxDesc}>
                Єндова або планка внутрішнього стоку - елемент покрівлі, що
                сприймає водостоки двох суміжних схилів та зводить їх до системи
                водовідведення.
              </p>
            </div>
            <div className={classNames(s.services__box, s.box4)}>
              <Image
                src={BoxImage4}
                width={90}
                height={60}
                className={s.boxImg}
              />
              <h4 className={s.boxTitle}>Декоративна накладка жолоба</h4>
              <p className={s.boxDesc}>
                Основним призначенням декоративної планки, на відміну від назви,
                є утримання снігового покрову двох суміжних схилів. Так
                утворюється доступ талої води в єндову /жолоб/ та безперешкоднє
                її відведення.
              </p>
            </div>
            <div className={classNames(s.services__box, s.box5)}>
              <Image
                src={BoxImage5}
                width={90}
                height={60}
                className={s.boxImg}
              />
              <h4 className={s.boxTitle}>Фронтонна планка</h4>
              <p className={s.boxDesc}>
                Це є захист бокової частини схилу та протидіє боковим вітровим
                навантаженням. Вона закріває торцеву частину рештувань або
                вітрову дошку. Закріплюється збоку до вітрової дошки чии
                риштування /лат/, а зверху безпосередньо до покрівлі.
              </p>
            </div>
            <div className={classNames(s.services__box, s.box6)}>
              <Image
                src={BoxImage6}
                width={90}
                height={40}
                className={s.boxImg}
              />
              <h4 className={s.boxTitle}>Снігозатримувач</h4>
              <p className={s.boxDesc}>
                Своєрідний бар'єр на шляху зсуву снігової маси у вигляді
                металевої планки або точкового елементу /крягу/. Монтаж
                снігозахисту проводиться таким чином щоби він розміщувався в
                межах стінс споруди, тобто не знаходився на звісі покрівлі.
              </p>
            </div>
            <div className={classNames(s.services__box, s.box7)}>
              <Image
                src={BoxImage7}
                width={90}
                height={60}
                className={s.boxImg}
              />
              <h4 className={s.boxTitle}>Планка захисту карнизу</h4>
              <p className={s.boxDesc}>
                Слугує для спрямування потоку води, що збігає з даху
                безпосередньо до системи водовідведення та не допустити
                потрапляння вологи на кроквяну систему та софіт.
              </p>
            </div>
          </div>
          {/* </div> */}
          <Slider />
        </div>
      </section>
    </>
  );
}
