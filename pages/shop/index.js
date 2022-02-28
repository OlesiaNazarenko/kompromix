import Header from "../../components/header/Header";
import Head from "next/head";
import BaseModal from "../../components/modal/BaseModal";
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
