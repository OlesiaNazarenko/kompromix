import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import MessageIcon from "@mui/icons-material/Message";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import TextFeedback from "../textFeedback/TextFeedback";
import s from "./FeedbackPageNav.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import SectionTitleComponent from "../sectionTitleComponent/SectionTitleComponent";
import NewFeedbackForm from "../newFeedbackForm/NewFeedbackForm";
import VideoFeedbacks from "../videoFeedbacks/VideoFeedbacks";
import AudioFeedbacks from "../audioFeedbacks/AudioFeedbacks";
import { useRouter } from "next/router";
import Link from "next/link";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function TabsComponent({ notify, video }) {
  const { query } = useRouter();
  const [value, setValue] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    if (query.type === undefined) {
      return setValue(0);
    }
    if (query.type === "videoFeedbacks") {
      return setValue(1);
    }
    if (query.type === "audioFeedbacks") {
      return setValue(2);
    }
  }, [query.type]);

  // useEffect(() => {
  //   if (value === 0) {
  //     return (query.type = undefined);
  //   }
  //   if (value === 1) {
  //     return (query.type = "videoFeedbacks");
  //   }
  //   if (value === 2) {
  //     return (query.type = "audioFeedbacks");
  //   }
  // }, [value]);

  const handleChange = (event, newValue) => {
    console.log(newValue);

    if (newValue === 0) {
      query.type = undefined;
    }
    if (newValue === 1) {
      query.type = "videoFeedbacks";
    }
    if (newValue === 2) {
      query.type = "audioFeedbacks";
    }
    setValue(newValue);
    console.log(query.type);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const getTabsBox = (icon, title, type) => {
    return (
      <Link href={`/feedbacks?type=${type}`}>
        <div className={s.tabsTitleBox}>
          <div className={s.tabsTitleIcon}>{icon}</div>
          <p className={s.tabsTitleText}>{title}</p>
        </div>
      </Link>
    );
  };
  return (
    <>
      <Tabs
        value={value}
        className={s.tabs}
        onChange={handleChange}
        textColor="inherit"
        variant="fullWidth"
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
        aria-label="full width tabs "
      >
        <Tab
          label={getTabsBox(
            <MessageIcon />,
            "Текстові відгуки",
            "textFeedbacks"
          )}
          {...a11yProps(0)}
        ></Tab>
        <Tab
          label={getTabsBox(
            <SlowMotionVideoIcon />,
            "Відео відгуки",
            "videoFeedbacks"
          )}
          {...a11yProps(1)}
        />
        <Tab
          label={getTabsBox(
            <PermPhoneMsgIcon />,
            "Відділ якості",
            "audioFeedbacks"
          )}
          {...a11yProps(2)}
        />
      </Tabs>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
          className={s.tabItem}
        >
          <SectionTitleComponent
            title={"Текстові "}
            subTitle={"відгуки"}
            icon={<MessageIcon />}
          />
          <p>
            Ви можете зателефонувати клієнту за номером телефону у відгуку та
            дізнатися його думку про роботу компанії &#34;Kompromix&#34; &#46;
            Усі телефони вказуються виключно за згодою клієнтів&#46;
          </p>
          <TextFeedback />
          <NewFeedbackForm notify={notify} />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
          className={s.tabItem}
        >
          <SectionTitleComponent
            title={"Відео "}
            subTitle={"відгуки"}
            icon={<SlowMotionVideoIcon />}
          />
          <VideoFeedbacks video={video} />
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          dir={theme.direction}
          className={s.tabItem}
        >
          <SectionTitleComponent
            title={"Відділ"}
            subTitle={"якості"}
            icon={<PermPhoneMsgIcon />}
          />
          <p>
            Наша компанія прагне вдосконалення, тому ми ретельно стежимо за
            якістю робіт. Наші співробітники дізнаються у клієнтів, що їм
            сподобалося у роботі, а що слід покращити.
          </p>
          <AudioFeedbacks />
        </TabPanel>
      </SwipeableViews>
    </>
  );
}
