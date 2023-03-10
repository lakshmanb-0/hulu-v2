import { ThumbUpOffAlt } from "@mui/icons-material";
import Image from "next/image";

const Thumbnail = ({ result }) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-110 hover:z-50">
      <Image
        src={
          `${base_url}${result.backdrop_path || result.poster_path}` ||
          `${base_url}${result.poster_path}`
        }
        alt={result.title}
        width={1080}
        height={1920}
        className="rounded"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2
          title={result.title}
          className="truncate mt-1 text-2xl text-white group-hover:font-bold transition-all duration-100 ease-in-out"
        >
          {result.title || result.original_name}
        </h2>
        <span className="opacity-0 group-hover:opacity-100 flex items-center">
          {`${result.release_date} • ${result.vote_count} `}
          <ThumbUpOffAlt className="ml-1 h-5" />
        </span>
      </div>
    </div>
  );
};

export default Thumbnail;
