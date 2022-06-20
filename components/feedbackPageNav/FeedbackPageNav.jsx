import Link from "next/link";
import SectionTitleComponent from "../sectionTitleComponent/SectionTitleComponent";
import TabsComponent from "./TabsComponent";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { fetchAllTextFeedbacks } from "../../redux/feedbacks/feedbacks-operations";
import feedbacksSelectors from "../../redux/feedbacks/feedbacks-selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import s from "./FeedbackPageNav.module.css";
import { useRouter } from "next/router";

export default function FeedbackPageNav({ notify, video }) {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const newFeedback = useSelector(feedbacksSelectors.getNewFeedback);
  useEffect(() => {
    dispatch(fetchAllTextFeedbacks());
  }, [newFeedback]);
  return (
    <section className={s.FeedbackPageNavSection}>
      <div className="container">
        <div className="linksFlowWrap">
          <Link href={"/"}>
            <a>Головна</a>
          </Link>
          <ArrowForwardIosIcon className="linksFlowArrow" />
          <Link href={"/feedbacks"}>
            <a>Відгуки</a>
          </Link>
          {query.type && (
            <>
              {" "}
              <ArrowForwardIosIcon className="linksFlowArrow" />
              <Link href={"/feedbacks"}>
                <a>
                  {(query.type === "textFeedbacks" && "Текстові відгуки") ||
                    (query.type === "videoFeedbacks" && "Відео відгуки") ||
                    (query.type === "audioFeedbacks" && "Відділ якості")}{" "}
                </a>
              </Link>
            </>
          )}
        </div>

        <SectionTitleComponent
          title={"Відгуки"}
          subTitle={"думки клієнтів"}
          icon={<VolunteerActivismIcon />}
        />
        <TabsComponent notify={notify} video={video} />
      </div>
    </section>
  );
}
