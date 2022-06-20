import RoofingIcon from "@mui/icons-material/Roofing";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import PermDataSettingOutlinedIcon from "@mui/icons-material/PermDataSettingOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import GroupsIcon from "@mui/icons-material/Groups";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import ForumIcon from "@mui/icons-material/Forum";
import CommentIcon from "@mui/icons-material/Comment";
const mainNavigation = [
  { title: "Головна", path: "/" },
  { title: "Про компанію", path: "/about" },
  {
    title: "Проекти",
    path: "/projects",
    subList: {
      icon: <MapsHomeWorkIcon />,
      title: "Проекти",
      subTitle: "Наші роботи",
      link: "детальніше",
      linkPath: "/projects",
      linksList: [
        {
          title: "Галерея робіт",
          path: "/projects",
          icon: <PhotoSizeSelectActualIcon />,
        },
        {
          title: "Географія об'єктів",
          path: "/projects#GoogleMapSection",
          icon: <LocationOnIcon />,
        },
        {
          title: " Покрівлі до і після",
          path: "/projects/beforeAfter",
          icon: <RoofingIcon />,
        },
        {
          title: "Окремі вузли у покрівлі",
          path: "/projects/tin",
          icon: <PermDataSettingOutlinedIcon />,
        },
      ],
    },
  },
  // { title: "Магазин", path: "/shop" },
  {
    title: "Відгуки",
    path: "/feedbacks",
    subList: {
      icon: <ForumIcon />,
      title: "Відгуки",
      subTitle: " Враження наших клієнтів",
      link: "детальніше",
      linkPath: "/feedbacks",
      linksList: [
        {
          title: "Текстові відгуки",
          path: "/feedbacks?type=textFeedbacks",
          icon: <CommentIcon />,
        },
        {
          title: "Відео відгуки",
          path: "/feedbacks?type=videoFeedbacks",
          icon: <SlowMotionVideoIcon />,
        },
        {
          title: "Відділ якості",
          path: "/feedbacks?type=audioFeedbacks",
          icon: <GroupsIcon />,
        },
      ],
    },
  },
  { title: "Контакти", path: "/contacts" },
];
export default mainNavigation;
