import { Rating } from "@mui/material";
import Image from "next/image";
import s from "./AudioFeedbacks.module.css";
import userIcon from "../../public/feedbacks/6.jpg";
export default function AudioFeedbacks() {
  const audioFeedback = {
    path: "",
    date: "12.07.2010",
    rate: 4,
    userIcon: "",
  };

  const audios = Array(5).fill(audioFeedback);

  return (
    <div className={s.audioFeedbacksWrap} id="audioFeedbacks">
      {audios.map((item, index) => {
        return (
          <div className={s.audioFeedback} key={index}>
            <div className={s.imageWrap}>
              <Image src="/userIcon.jpg" layout="fill" />
            </div>
            <div className={s.contentWrap}>
              <p>{item.date}</p>
              <p>
                Оцінка компанії: <Rating readOnly value={item.rate} />
              </p>
              <audio controls>
                <source src={item.path} type="audio/ogg" />
              </audio>
            </div>
          </div>
        );
      })}
    </div>
  );
}
