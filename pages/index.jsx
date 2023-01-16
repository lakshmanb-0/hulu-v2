import Head from "next/head";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/huluFav.jpg" />
      </Head>
      <Header />
      <Navbar />
    </>
  );
}
