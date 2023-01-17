import Image from "next/image";
import HeaderElement from "./HeaderElement";
// import {
//   Bolt,
//   CollectionsOutlined,
//   HomeOutlined,
//   PersonOutlined,
//   SearchOutlined,
//   VerifiedOutlined,
// } from "@mui/icons-material";

function Header() {
  return (
    <header className="flex flex-col items-center justify-between sm:flex-row mx-5 my-4">
      <section className="flex flex-grow items-center justify-evenly max-w-2xl  ">
        {/* <HeaderElement title="HOME" Icon={HomeOutlined} />
        <HeaderElement title="TRENDING" Icon={Bolt} />
        <HeaderElement title="VERIFIED" Icon={VerifiedOutlined} />
        <HeaderElement title="COLLECTIONS" Icon={CollectionsOutlined} />
        <HeaderElement title="SEARCH" Icon={SearchOutlined} />
        <HeaderElement title="ACCOUNT" Icon={PersonOutlined} /> */}
      </section>
      <Image
        priority
        src="/huluWhite.Png"
        alt="logo"
        width={130}
        height={130}
        className="object-contain mr-5"
      />
    </header>
  );
}

export default Header;
