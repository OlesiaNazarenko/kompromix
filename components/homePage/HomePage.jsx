import s from "./HomePage.module.css";
import OurBenefits from "../ourBenefits";
import classNames from "classnames";
import WorksGallery from "../worksGallery";
import ServicesSlider from "../servicesSlider";
import FeedbackSection from "../feedbackSection";
import GoogleMapSection from "../googleMapSection";
import ContactForm from "../contactForm/ContactForm";
export default function HomePage({ props }) {
  return (
    <>
      <section className={s.homePageWrap}>
        <div className={s.bg}>
          <div className="container">
            <ServicesSlider props={props.servicesSlides} />
          </div>
        </div>
        <div className={classNames(s.ourBenefits, "ourBenefits")}>
          <OurBenefits props={props.ourBenefitsSlides} />
        </div>
        <div className={s.WorksGallery}>
          <WorksGallery props={props.worksGallerySlides} />
        </div>

        <div className={classNames("container", s.feedbackSectionWrap)}>
          <FeedbackSection props={props.feedbacksSlides} />
        </div>
        <ContactForm />
        <GoogleMapSection props={props.markersData} />
      </section>
    </>
  );
}
