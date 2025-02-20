import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API_URL } from "../utils/constant";
import { getAllYouTubeVideos } from "../utils/videosSlice";
import { useDispatch } from "react-redux";
export const useVideos = () => {
  const dispatch = useDispatch();
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API_URL);
    const videos = await data.json();

    dispatch(getAllYouTubeVideos(videos?.items));
  };
  useEffect(() => {
    getVideos();
  }, []);
};
