import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API_URL } from "../utils/constant";

const VideoContainer = () => {
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API_URL);
    const videos = await data.json();
    console.log(videos); // Output the fetched video data to the console.
  };
  useEffect(() => {
    getVideos();
  }, []);
  return <div>VideoContainer</div>;
};

export default VideoContainer;
