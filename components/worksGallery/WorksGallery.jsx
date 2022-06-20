import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import React, { useState } from "react";
import "swiper/css/pagination";
import classNames from "classnames";
import s from "./WorksGallery.module.css";
import HomeIcon from "@mui/icons-material/Home";
import RoofingIcon from "@mui/icons-material/Roofing";
import { FreeMode, Pagination, Navigation } from "swiper";
import Link from "next/link";
import ImageModal from "../imageModal/ImageModal.jsx";
import SectionTitleComponent from "../sectionTitleComponent/SectionTitleComponent";

export default function WorksGallery({ props }) {
  const [open, setOpen] = React.useState(false);
  const [modalImg, setModalImg] = useState("");

  const handleOpen = (e) => {
    let imgSrc = "";
    props.forEach((item, index) => {
      if (index == e.target.id) {
        imgSrc = item;
      }
      setModalImg(imgSrc);
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalImg("");
  };

  return (
    <>
      <section
        className={classNames("container", "worksGallery", s.worksGallery)}
      >
        <SectionTitleComponent
          title={"Галерея робіт"}
          subTitle={"готові покрівлі"}
          icon={<HomeIcon />}
        />
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          loop={true}
          observer={true}
          observeParents={true}
          navigation={true}
          // pagination={{
          //   clickable: true,
          //   dynamicBullets: true,
          // }}
          modules={[FreeMode, Pagination, Navigation]}
          className={s.mySwiper}
        >
          {props.map((item, index) => {
            return (
              <SwiperSlide className={s.slide} key={index}>
                <div className={s.img}>
                  <Image
                    id={index}
                    onClick={handleOpen}
                    className={s.imgBg}
                    src={item}
                    alt=""
                    role="presentation"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                  />
                </div>
              </SwiperSlide>
            );
          })}
          <ImageModal image={modalImg} open={open} handleClose={handleClose} />
        </Swiper>

        <Link href={"/"}>
          <a className={s.worksGallery__link}>
            {" "}
            <RoofingIcon />
            Дивитись усі об&#39;єкти
          </a>
        </Link>
      </section>
    </>
  );
}
