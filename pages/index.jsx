import Head from "next/head";
import Header from "../Components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/huluFav.jpg" />
      </Head>
      <Header />
    </>
  );
}
