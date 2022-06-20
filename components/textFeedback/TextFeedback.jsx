import feedbacksSelectors from "../../redux/feedbacks/feedbacks-selectors";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import s from "./TextFeedback.module.css";
s;
import Rating from "@mui/material/Rating";
import Loader from "../loader/Loader";
import Button from "../button/Button";

export default function TextFeedback({ notify }) {
  const allFeedbacks = useSelector(feedbacksSelectors.getAllFeedbacks);
  const [feedbacks, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [sliceStart, setSliceStart] = useState(0);
  const feedbacksNumber = 8;

  const pageIncrement = () => {
    setPage((prevPage) => {
      return prevPage + 1;
    });
  };

  useEffect(() => {
    setLoading(true);
    const getResults = () => {
      const items = allFeedbacks.filter((item, index) => {
        return index >= sliceStart && index < feedbacksNumber * page;
      });
      setFeedback((prevFeedbacks) => {
        return [...prevFeedbacks, ...items];
      });
    };
    setSliceStart(sliceStart + 8);
    setTimeout(() => {
      getResults();
      setLoading(false);
    }, "2000");
  }, [page]);

  useEffect(() => {
    allFeedbacks.length - feedbacks.length === 1 &&
      setFeedback((prevFeedbacks) => {
        return [...prevFeedbacks, allFeedbacks[allFeedbacks.length - 1]];
      });
  }, [allFeedbacks]);

  const isNotLastPage = feedbacks.length / page === feedbacksNumber;
  const btnEnable = feedbacks.length > 0 && !loading && isNotLastPage;

  return (
    <>
      <ul>
        {feedbacks.map((item, index) => {
          return (
            <li key={index} className={s.feedbacksListItem}>
              <div className={s.flexWrap}>
                <p className={s.userName}>{item.userName}</p>
                <p className={s.date}>{item.date}</p>
              </div>
              <Rating name="read-only" value={item.rate} readOnly />
              {item.userNumber && <p>{item.userNumber}</p>}
              <p className={s.feedbackText}>{item.feedbackText}</p>
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
          Це всі текстові відгуки. Ви можете переглянути ще відео відгуки. Або
          залиште свій відгук у формі нижне.
        </p>
      )}
    </>
  );
}
