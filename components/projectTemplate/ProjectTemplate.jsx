import Image from "next/image";
import Link from "next/link";
import s from "./ProjectTemplate.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";
import ImageModal from "../imageModal/ImageModal";
import projectsSelectors from "../../redux/projects/projects-selectors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function ProjectTemplate() {
  const [open, setOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const projects = useSelector(projectsSelectors.getProjects);
  const { query } = useRouter();

  query.id !== undefined && localStorage.setItem("projectId", query.id);
  const projectId = localStorage.getItem("projectId");

  const currentProject = projects.find((item, index) => {
    return index == projectId;
  });

  const handleOpen = (e) => {
    setModalImg(currentProject.img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalImg("");
  };
  return (
    <div className="container">
      <section className={s.projectWrap}>
        <div className="linksFlowWrap">
          <Link href={"/"}>
            <a>Головна</a>
          </Link>
          <ArrowForwardIosIcon className="linksFlowArrow" />
          <Link href={"/projects"}>
            <a>Об&#39;єкти</a>
          </Link>
          <ArrowForwardIosIcon className="linksFlowArrow" />
          <Link href={""}>
            <a>Name</a>
          </Link>
        </div>
        <div className={s.linksWrap}>
          <Link href={`/projects/project/${Number(query.id) - 1}`}>
            <a className={s.linksWrapLink}>
              <ArrowBackIosIcon className={s.linksArrow} />
              Попередній об&#39;єкт
            </a>
          </Link>
          <Link href={`/projects/project/${Number(query.id) + 1}`}>
            <a className={s.linksWrapLink}>
              Наступний об&#39;єкт
              <ArrowForwardIosIcon className={s.linksArrow} />
            </a>
          </Link>
        </div>
        <div className={s.projectCard}>
          <h1 className={s.projectCardName}>Name</h1>
          <div className={s.contentWrap}>
            <div className={s.image}>
              <Image
                src={currentProject.img}
                layout="fill"
                onClick={handleOpen}
                alt=""
              />
            </div>
            <div className={s.textWrap}>
              <p>Картка об&#39;єкта</p>
              <p>Тип робіт&#58;</p>
              <ol>
                {currentProject.services.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ol>
              <p>Рік&#58; {currentProject.year}</p>
              <p>Вартість&#58; 10000</p>
              <p>Термін виконання робіт&#58; {currentProject.period}</p>
              <p>Географія роботи&#58; Запоріжжя</p>
            </div>
            <ImageModal
              image={modalImg}
              open={open}
              handleClose={handleClose}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
