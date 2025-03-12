import Videos from "./Videos";
import { useVideosResult } from "../hooks/useVieosResult";

const Results = () => {
  const { videoResults } = useVideosResult();

  return (
    <div>
      <Videos videos={videoResults} />
    </div>
  );
};

export default Results;
