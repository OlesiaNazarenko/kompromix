import Header from "../../components/header/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";
import Footer from "../../components/footer";
import FeedbackPageNav from "../../components/feedbackPageNav/FeedbackPageNav";
import ContactForm from "../../components/contactForm/ContactForm";
import db from "../../db/db";
import { collection, getDocs } from "firebase/firestore";

const notify = (msg) =>
  toast.info(msg, {
    theme: "colored",
    icon: false,
  });

export default function Projects({ video }) {
  return (
    <>
      <Head>
        <title>Kompromix. Відгуки</title>
      </Head>
      <Header />
      <FeedbackPageNav notify={notify} video={video} />
      <ContactForm />
      <Footer />
      <ToastContainer />
    </>
  );
}
export async function getServerSideProps() {
  let video = [];
  const getVideoData = await getDocs(collection(db, "videoFeedbacks"));
  getVideoData.forEach((doc) => {
    video = doc.data().video;
  });

  return {
    props: {
      video,
    },
  };
}
