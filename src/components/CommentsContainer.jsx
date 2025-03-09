import { useEffect } from "react";
import { YOUTUBE_COMMENTS_API_URL } from "../utils/constant";
import CommentsList from "./CommentsList";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../utils/commentsSlice";
// import { commentsData } from "../utils/commentsData";
const CommentsContainer = () => {
  const fetchComments = useSelector((store) => store?.comment?.comments);
  // console.log(fetchComments);

  const dispatch = useDispatch();
  const [videoParams] = useSearchParams();
  const videoId = videoParams.get("v");
  // console.log(videoId);

  const getCommentsResults = async () => {
    const apiURL = YOUTUBE_COMMENTS_API_URL(videoId);

    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data);
      dispatch(addComments(data?.items || []));
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    getCommentsResults();
  }, [videoId]);

  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-bold">Comments: </h1>
      <CommentsList comments={fetchComments} />
    </div>
  );
};

export default CommentsContainer;
