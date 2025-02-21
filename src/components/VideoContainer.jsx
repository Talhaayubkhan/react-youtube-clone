import VideoCard from "./VideoCard";
import useVideos from "../hooks/useVideos";
const VideoContainer = () => {
  useVideos();
  return (
    <div>
      <VideoCard />
    </div>
  );
};

export default VideoContainer;
