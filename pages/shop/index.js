import Header from "../../components/header/Header";
import Head from "next/head";
import BaseModal from "../../components/baseModal/BaseModal";
import Footer from "../../components/footer/Footer";
export default function Shop() {
  return (
    <>
      <Head>
        <title>Kompromix. Магазин</title>
      </Head>
      <Header />
      <h1>Shop</h1>
      <BaseModal className="buttonGetTheCall" buttonName="Shop" />
      <Footer />
    </>
  );
}
