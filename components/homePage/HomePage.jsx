import s from "./HomePage.module.css";
import data from "../../json/ourBenefits.json";
import OurBenefits from "../ourBenefits/OurBenefits";
import classNames from "classnames";
import WorksGallery from "../worksGallery/WorksGallery";
import ServicesSlider from "../servicesSlider/ServicesSlider";
import FeedbackSection from "../feedbackSection/FeedbackSection";
import GoogleMapSection from "../googleMapSection/GoogleMapSection.jsx";

export default function HomePage() {
  const { slides } = data;
  return (
    <>
      <section className={s.homePageWrap}>
        <div className={s.bg}>
          <div className="container">
            <ServicesSlider />
          </div>
        </div>
        <div className={classNames(s.ourBenefits, "ourBenefits")}>
          <OurBenefits slides={slides} />
        </div>
        <WorksGallery />
        <div className={classNames("container", s.feedbackSectionWrap)}>
          <FeedbackSection />
        </div>
        <GoogleMapSection />
      </section>
    </>
  );
}
