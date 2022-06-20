import Header from "../../components/header/Header";
import Head from "next/head";
import Footer from "../../components/footer";
import GoogleMapSection from "../../components/googleMapSection";
import ProjectsGallery from "../../components/projectsGallery";
import ContactForm from "../../components/contactForm/ContactForm";
import db from "../../db/db";
import { collection, getDocs } from "firebase/firestore";

export default function Projects({ markersData }) {
  return (
    <>
      <Head>
        <title>Kompromix. Наші проекти</title>
      </Head>
      <Header />
      <ProjectsGallery />
      <GoogleMapSection props={markersData} />
      <ContactForm />
      <Footer />
    </>
  );
}
export async function getServerSideProps() {
  let markersData = [];
  const getMarkersData = await getDocs(collection(db, "mapMarks"));
  getMarkersData.forEach((doc) => {
    markersData = doc.data().marks;
  });
  return {
    props: {
      markersData,
    },
  };
}
