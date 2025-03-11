import { useFetchComments } from "../hooks/useFetchComments";
import CommentsList from "./CommentsList";
const CommentsContainer = () => {
  const { comments } = useFetchComments();
  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-bold">Comments: </h1>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
