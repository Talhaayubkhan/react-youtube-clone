import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../utils/commentsSlice";
import { useEffect } from "react";
import { YOUTUBE_COMMENTS_API_URL } from "../utils/constant";
export const useFetchComments = () => {
  const fetchComments = useSelector((store) => store?.comment?.comments);
  // console.log(fetchComments);
  const dispatch = useDispatch();
  const [videoParams] = useSearchParams();
  const videoId = videoParams.get("v");

  const getCommentsResults = async () => {
    const apiURL = YOUTUBE_COMMENTS_API_URL(videoId);

    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      dispatch(addComments(data?.items || []));
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    getCommentsResults();
  }, [videoId]);

  return {
    comments: fetchComments,
  };
};
