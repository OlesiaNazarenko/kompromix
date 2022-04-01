import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function BeforeAfterSlider({ imgAfter, imgBefore }) {
  return (
    <ReactCompareSlider
      style={{ width: "100%", height: "100%" }}
      itemOne={
        <ReactCompareSliderImage src={imgBefore} alt="До початку робіт" />
      }
      itemTwo={
        <ReactCompareSliderImage
          src={imgAfter}
          alt="Після виконання нашої роботи"
        />
      }
    />
  );
}
