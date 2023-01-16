import { useRouter } from "next/router";
import requests from "../utils/requests";

function Navbar() {
  const router = useRouter();
  return (
    <section className="relative">
      <nav className="flex whitespace-nowrap space-x-10 sm:space-x-20 text-xl sm:text-3xl overflow-x-scroll px-5 sm:px-10 scrollbar-hide py-3">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre/${key}`)}
            className="last:pr-5 cursor-pointer transition duration-500 transform hover:text-white hover:scale-125 active:text-red-500 select-none"
          >
            {title}
          </h2>
        ))}
      </nav>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-14 w-1/12"></div>
    </section>
  );
}

export default Navbar;
