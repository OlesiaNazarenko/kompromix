import s from "./FeedbackSection.module.css";
import BeforeAfterSlider from "../beforeAfterSlider/BeforeAfterSlider";
import PaidIcon from "@mui/icons-material/Paid";
import RoofingIcon from "@mui/icons-material/Roofing";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
export default function FeedbackItem({ item }) {
  return (
    <>
      <div className={s.beforeAfter}>
        <BeforeAfterSlider className={s.beforeAfter_slider} {...item.images} />
      </div>
      <div className={[s.textFeedback, "beforeAfterFeedback"].join(" ")}>
        <h4>{item.userName}</h4>
        <p>{item.textFeedback}</p>
        <table className={s.feedbackSection_table}>
          <tbody>
            <tr className={s.tableRow}>
              <td>
                <RoofingIcon width={24} height={24} className={s.tableIcon} />
              </td>
              <td>{item.service}</td>
            </tr>
            <tr className={s.tableRow}>
              <td>
                <LocationOnIcon
                  width={24}
                  height={24}
                  alt=""
                  className={s.tableIcon}
                />
              </td>
              <td>{item.location}</td>
            </tr>
            <tr className={s.tableRow}>
              <td>
                <DesignServicesIcon
                  width={24}
                  height={24}
                  className={s.tableIcon}
                />
              </td>
              <td>{item.square}m&#178;</td>
            </tr>
            <tr className={s.tableRow}>
              <td>
                <PaidIcon width={24} height={24} className={s.tableIcon} />
              </td>
              <td>{item.payment}</td>
            </tr>
          </tbody>
        </table>
        <div className={s.userIcon}>
          <Image
            src={item.userIcon}
            alt=""
            width={50}
            height={50}
            layout="responsive"
          ></Image>
        </div>
      </div>
    </>
  );
}
