import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  // console.log(comments);

  if (!comments || comments.length === 0) return;
  return comments.map((comment) => {
    // console.log(comment);

    const { snippet, replies } = comment;

    const topLevelComment = snippet?.topLevelComment?.snippet;
    const commentReplies = replies?.comments || []; // Extract replies data if available

    const commentsData = {
      user: topLevelComment?.authorDisplayName,
      text: topLevelComment?.textOriginal,
      avatar: topLevelComment?.authorProfileImageUrl,
      timestamp: new Date(topLevelComment?.publishedAt).toLocaleString(),
      likes: topLevelComment?.likeCount,
      dislikes: 0,
    };
    const nestedComment = {
      replies: commentReplies,
    };
    return (
      <div key={comment.key}>
        <Comment data={commentsData} />
        {nestedComment?.replies.length > 0 && (
          <div className="ml-10 border-l-2 border-gray-300">
            <CommentsList comments={nestedComment?.replies} />
          </div>
        )}
      </div>
    );
  });
};

export default CommentsList;
