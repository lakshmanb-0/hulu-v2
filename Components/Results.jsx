import Thumbnail from "./Thumbnail";
function Results({ result }) {
  return (
    <div className="px-6 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {result?.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
