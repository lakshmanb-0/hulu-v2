import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
function Results({ result }) {
  return (
    <FlipMove
      typeName="div"
      className="px-6 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
    >
      {result?.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
