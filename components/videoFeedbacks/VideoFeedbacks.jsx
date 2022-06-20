import s from "./VideoFeedbacks.module.css";
export default function VideoFeedbacks({ video }) {
  const videos = Array(5).fill(video).flat();
  return (
    <div className={s.videoFeedbacksWrap}>
      {videos.map((item, index) => {
        return (
          <div className={s.videoFeedback}>
            <video
              key={index}
              muted
              controls
              className={s.videoItem}
              controlsList="nodownload"
            >
              <source src={item.path} type="video/mp4" />
            </video>
            <p className={s.videoTitle}>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}
