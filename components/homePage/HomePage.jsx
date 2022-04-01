import s from "./HomePage.module.css";
import OurBenefits from "../ourBenefits/OurBenefits";
import classNames from "classnames";
import WorksGallery from "../worksGallery/WorksGallery";
import ServicesSlider from "../servicesSlider/ServicesSlider";
import FeedbackSection from "../feedbackSection/FeedbackSection";
import GoogleMapSection from "../googleMapSection/GoogleMapSection.jsx";

export default function HomePage() {
  return (
    <>
      <section className={s.homePageWrap}>
        <div className={s.bg}>
          <div className="container">
            <ServicesSlider />
          </div>
        </div>
        <div className={classNames(s.ourBenefits, "ourBenefits")}>
          <OurBenefits />
        </div>
        <div className={s.WorksGallery}>
          <WorksGallery />
        </div>

        <div className={classNames("container", s.feedbackSectionWrap)}>
          <FeedbackSection />
        </div>
        <GoogleMapSection />
      </section>
    </>
  );
}
