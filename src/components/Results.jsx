import Videos from "./Videos";
import { useVideosResult } from "../hooks/useVieosResult";

const Results = () => {
  const { videoResults, isLoading } = useVideosResult();

  return (
    <div>
      <Videos videos={videoResults} isLoading={isLoading} />
    </div>
  );
};

export default Results;
