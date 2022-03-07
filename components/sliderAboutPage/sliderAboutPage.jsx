import s from "./SliderAboutPage.module.css";
import Img1 from "../../public/sliderAboutPage/1.jpg";
import Img2 from "../../public/sliderAboutPage/2.jpg";
import Img3 from "../../public/sliderAboutPage/3.jpg";
import Img4 from "../../public/sliderAboutPage/4.jpg";
import Img5 from "../../public/sliderAboutPage/5.jpg";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "#222831",
//         borderRadius: "50%",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "#222831",
//         borderRadius: "50%",
//       }}
//       onClick={onClick}
//     />
//   );
// }
export default class SliderAboutPage extends Component {
  state = {
    display: true,
    width: 600,
  };
  images = [Img1, Img2, Img3, Img4, Img5];
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: false,
      prevArrow: false,
    };
    return (
      <div className={s.sliderWrap}>
        <Slider {...settings}>
          {this.images.map((item, index) => {
            return (
              <div key={index}>
                <Image src={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
