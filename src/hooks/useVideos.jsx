import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API_URL } from "../utils/constant";
import { getAllYouTubeVideos } from "../utils/videosSlice";
import { useDispatch } from "react-redux";

const useVideos = () => {
  const dispatch = useDispatch();
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API_URL);
    const videos = await data.json();
    // console.log(videos.items);

    dispatch(getAllYouTubeVideos(videos?.items));
  };
  useEffect(() => {
    getVideos();
  }, []);
};

export default useVideos;
