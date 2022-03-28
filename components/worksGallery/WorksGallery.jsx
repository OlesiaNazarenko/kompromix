import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import React, { useEffect, useState } from "react";
import "swiper/css/pagination";
import classNames from "classnames";
import style from "../servicesSlider/ServicesSlider.module.css";
import s from "./WorksGallery.module.css";
import HomeIcon from "@mui/icons-material/Home";
s;
import CloseIcon from "@mui/icons-material/Close";
import RoofingIcon from "@mui/icons-material/Roofing";
import { FreeMode, Pagination, Navigation } from "swiper";
import Link from "next/link";
import worksGallery from "../../json/worksGallery.json";
import Modal from "@mui/material/Modal";

export default function WorksGallery() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    setModalImg(e.target.src);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setModalImg("");
  };
  const [images, setImages] = useState([]);
  const [modalImg, setModalImg] = useState("");

  useEffect(() => {
    const { images } = worksGallery;
    setImages(images);
  }, []);

  function ModalImg({ image }) {
    return (
      <Modal
        BackdropProps={{
          classes: {
            root: s.backDrop,
          },
        }}
        className={s.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={s.modalImg}>
          <CloseIcon className={s.closeIcon} onClick={handleClose} />
          <Image
            src={image}
            alt=""
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
      </Modal>
    );
  }
  return (
    <>
      <section
        className={classNames("container", "worksGallery", s.worksGallery)}
      >
        <div
          className={classNames(
            style.services__descWrap,
            s.worksGallery_descWrap
          )}
        >
          <HomeIcon
            className={classNames(style.services__icon, s.worksGallery__icon)}
          />
          <div className={style.worksGallery__textWrap}>
            <h1 className={style.textWrap__title}>Галерея робіт</h1>
            <span className={style.textWrap__desc}>готові покрівлі</span>
          </div>
        </div>
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
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className={s.mySwiper}
        >
          {images.map((item, index) => {
            return (
              <SwiperSlide className={s.slide} key={index}>
                <div className={s.img}>
                  <Image
                    onClick={handleOpen}
                    className={s.imgBg}
                    src={item.image}
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
          <ModalImg image={modalImg} />
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
