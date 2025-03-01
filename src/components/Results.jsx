import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const Results = () => {
  const isMenuIconOpen = useSelector((store) => store.app?.isMenuOpen);
  if (!isMenuIconOpen) return null;
  return (
    <div>
      <VideoCard />
    </div>
  );
};

export default Results;
