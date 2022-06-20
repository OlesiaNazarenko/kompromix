import Header from "../../../components/header/Header";
import Head from "next/head";
import Footer from "../../../components/footer";
import ContactForm from "../../../components/contactForm/ContactForm";
import BeforeAfterPage from "../../../components/beforeAfterPage/BeforeAfterPage";

export default function BeforeAfterProjects() {
  return (
    <>
      <Head>
        <title>Kompromix. До і після проекти</title>
      </Head>
      <Header />
      <BeforeAfterPage />
      <ContactForm />
      <Footer />
    </>
  );
}
