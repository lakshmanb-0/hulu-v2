import Image from "next/image";
import HeaderElement from "./HeaderElement";
import {
  Bolt,
  CollectionsOutlined,
  HomeOutlined,
  PersonOutlined,
  SearchOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";

function Header() {
  return (
    <div className="flex flex-col items-center justify-between sm:flex-row m-5">
      <div className="flex flex-grow items-center justify-evenly max-w-2xl  ">
        <HeaderElement title="HOME" Icon={HomeOutlined} />
        <HeaderElement title="TRENDING" Icon={Bolt} />
        <HeaderElement title="VERIFIED" Icon={VerifiedOutlined} />
        <HeaderElement title="COLLECTIONS" Icon={CollectionsOutlined} />
        <HeaderElement title="SEARCH" Icon={SearchOutlined} />
        <HeaderElement title="ACCOUNT" Icon={PersonOutlined} />
      </div>
      <Image
        priority
        src="/huluWhite.Png"
        alt="logo"
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
  );
}

export default Header;
