import s from "./ProjectsGallery.module.css";
import Link from "next/link";
import "swiper/css/navigation";
import "swiper/css";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IosShareIcon from "@mui/icons-material/IosShare";
import { useState } from "react";
import { useEffect } from "react";
import { fetchAllProjects } from "../../redux/projects/projects-operations";
import { useDispatch, useSelector } from "react-redux";
import projectsSelectors from "../../redux/projects/projects-selectors";
import SectionTitleComponent from "../sectionTitleComponent/SectionTitleComponent";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
import _ from "lodash";

export default function ProjectsGallery() {
  const projects = useSelector(projectsSelectors.getProjects);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProjects());
  }, []);

  const [page, setPage] = useState(1);
  const pageSize = 16;
  const totalPages = Math.ceil(projects.length / pageSize);
  const handleChangePage = (event, value) => {
    setPage(value);
    router.query.page = value;
  };
  const paginate = (items, page, pageSize) => {
    const startIndex = (page - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
  };
  const paginateProjects = paginate(projects, page, pageSize);
  return (
    <div className="container">
      <section className={[s.projectsGallery, "projectsGallery"].join(" ")}>
        <div className="linksFlowWrap">
          <Link href={"/"}>
            <a>Головна</a>
          </Link>
          <ArrowForwardIosIcon className="linksFlowArrow" />
          <Link href={"/projects"}>
            <a>Проекти</a>
          </Link>
        </div>

        <div className={s.descWrap}>
          <SectionTitleComponent
            title={"Наші об'єкти"}
            subTitle={"готові покрівлі"}
            icon={<MapsHomeWorkIcon />}
          />
          <div className={s.btnWrap}>
            {page > 1 && (
              <Link href={`/projects?page=${page - 1}`}>
                <a
                  onClick={() => {
                    return setPage(page - 1);
                  }}
                  className="swiper-button-prev"
                ></a>
              </Link>
            )}
            <Link href={`/projects?page=${page + 1}`}>
              <a
                className={[
                  "swiper-button-next",
                  page == totalPages && "disabledLink",
                ].join(" ")}
                onClick={() => {
                  return setPage(page + 1);
                }}
              ></a>
            </Link>
          </div>
        </div>
        <ul className={s.projectsList}>
          {paginateProjects &&
            paginateProjects.map((item, index) => {
              return (
                <li key={index} className={s.projectsList__item}>
                  <a
                    style={{ backgroundImage: `url(${item.img})` }}
                    className={s.galleryItem}
                  ></a>
                  <Link href={`/projects/project/${index}`}>
                    <div className={s.galleryItem__backSide}>
                      <ol>
                        {item.services.map((service, index) => {
                          return <li key={index}>{service}</li>;
                        })}
                      </ol>
                      <ul>
                        <li>
                          <a href="">
                            <IosShareIcon />
                          </a>
                        </li>
                        <li>Рік: {item.year}</li>
                        <li>Термін виконання: {item.period}</li>
                      </ul>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
        <Pagination
          count={totalPages}
          page={page}
          shape="rounded"
          onChange={handleChangePage}
          className={s.pagination}
        />
      </section>
    </div>
  );
}
