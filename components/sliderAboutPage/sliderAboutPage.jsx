import s from "./SliderAboutPage.module.css";
import Link from "next/link";
import Router from "next/router";
import Img1 from "../../public/sliderAboutPage/1.jpg";
import Img2 from "../../public/sliderAboutPage/2.jpg";
import Img3 from "../../public/sliderAboutPage/3.jpg";
import Img4 from "../../public/sliderAboutPage/4.jpg";
import Img5 from "../../public/sliderAboutPage/5.jpg";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

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
      // vertical: true,
    };
    return (
      <div className={s.sliderWrap}>
        <Slider {...settings}>
          {this.images.map((item) => {
            return (
              <div>
                <Image src={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
