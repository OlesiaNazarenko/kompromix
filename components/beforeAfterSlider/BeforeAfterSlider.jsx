import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function BeforeAfterSlider({ imgAfter, imgBefore }) {
  return (
    <ReactCompareSlider
      style={{ width: "100%", height: "100%" }}
      itemOne={
        <ReactCompareSliderImage src={imgBefore.url} alt={imgBefore.alt} />
      }
      itemTwo={
        <ReactCompareSliderImage src={imgAfter.url} alt={imgAfter.alt} />
      }
    />
  );
}
