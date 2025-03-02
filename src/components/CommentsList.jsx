import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.key}>
      <Comment data={comment} />
      <div className="ml-10 border-l-2 border-gray-300">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
