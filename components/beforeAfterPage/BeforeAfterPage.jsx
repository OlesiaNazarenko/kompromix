import s from "./BeforeAfterPage.module.css";
import RoofingIcon from "@mui/icons-material/Roofing";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import SectionTitleComponent from "../sectionTitleComponent/SectionTitleComponent";
import FeedbackItem from "../feedbackSection/FeedbackItem";
import feedbacksSelectors from "../../redux/feedbacks/feedbacks-selectors";
import { fetchBeforeAfterFeedbacks } from "../../redux/feedbacks/feedbacks-operations";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import Button from "../button/Button";

export default function BeforeAfterPage() {
  const dispatch = useDispatch();
  const beforeAfterFeedbacks = useSelector(
    feedbacksSelectors.getBeforeAfterFeedbacks
  );
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [sliceStart, setSliceStart] = useState(0);
  const feedbacksNumber = 4;

  useEffect(() => {
    dispatch(fetchBeforeAfterFeedbacks());
  }, []);

  const pageIncrement = () => {
    setPage((prevPage) => {
      return prevPage + 1;
    });
  };

  useEffect(() => {
    setLoading(true);
    const getResults = () => {
      const items = beforeAfterFeedbacks.flat().filter((item, index) => {
        return index >= sliceStart && index < feedbacksNumber * page;
      });
      setFeedbacks((prevFeedbacks) => {
        return [...prevFeedbacks, ...items];
      });
    };
    setSliceStart(sliceStart + feedbacksNumber);
    setTimeout(() => {
      getResults();
      setLoading(false);
    }, "1000");
  }, [page]);

  const isNotLastPage = feedbacks.length / page === feedbacksNumber;
  const btnEnable = feedbacks.length > 0 && !loading && isNotLastPage;
  return (
    <>
      {" "}
      <section
        className={[s.beforeAfterPageSection, "beforeAfterPageSection"].join(
          " "
        )}
      >
        <div className="container">
          <div className="linksFlowWrap">
            <Link href={"/"}>
              <a>Головна</a>
            </Link>
            <ArrowForwardIosIcon className="linksFlowArrow" />
            <Link href={"/feedbacks"}>
              <a>Покрівлі до і після</a>
            </Link>
          </div>

          <SectionTitleComponent
            title={"Покрівлі"}
            subTitle={"до і після"}
            icon={<RoofingIcon />}
          />
          <ul className={s.feedbacksList}>
            {feedbacks &&
              feedbacks.map((item, index) => {
                return (
                  <li key={index} className={s.feedbacksItem}>
                    <FeedbackItem item={item} />
                  </li>
                );
              })}
          </ul>
          {loading && <Loader />}
          {btnEnable && (
            <Button
              type={"button"}
              name={"Завантажити ще"}
              onClick={pageIncrement}
            />
          )}
          {!btnEnable && !loading && !isNotLastPage && (
            <p>
              Це всі приклади робіт до і після. Ви можете переглянути більше
              прикладів наших робіт у{" "}
              <Link href="/projects">
                <a>Галереї робіт</a>
              </Link>
            </p>
          )}
        </div>
      </section>
    </>
  );
}
