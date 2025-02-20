import { useVideos } from "../hooks/useVideos";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  useVideos();
  return (
    <div>
      <VideoCard />
    </div>
  );
};

export default VideoContainer;
