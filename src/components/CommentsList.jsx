import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  if (!comments || comments.length === 0) return;

  return comments.map((comment) => {
    if (comment.kind === "youtube#commentThread") {
      const { snippet, replies, id } = comment;

      // Extract top level comment data
      const topLevelComment = snippet?.topLevelComment?.snippet;
      if (!topLevelComment) return null;

      const topLevelCommentData = {
        user: topLevelComment?.authorDisplayName,
        text: topLevelComment?.textOriginal,
        avatar: topLevelComment?.authorProfileImageUrl || "No Avatar",
        timestamp: topLevelComment.publishedAt
          ? new Date(topLevelComment.publishedAt).toLocaleString()
          : "No date",
        likes: topLevelComment?.likeCount,
        dislikes: 0,
        key: id,
      };

      // Extract replies to this comment thread
      const repliesList = replies?.comments || [];

      return (
        <div key={topLevelCommentData.key}>
          <Comment data={topLevelCommentData} />
          {repliesList?.length > 0 && (
            <div className="ml-10 border-l-2 border-gray-500">
              <CommentsList comments={repliesList} />
            </div>
          )}
        </div>
      );
    } else if (comment.kind === "youtube#comment") {
      const { snippet, id } = comment;
      const replyCommentData = {
        user: snippet?.authorDisplayName,
        text: snippet?.textOriginal,
        avatar: snippet?.authorProfileImageUrl,
        timestamp: snippet?.publishedAt
          ? new Date(snippet.publishedAt).toLocaleString()
          : "No date",
        likes: snippet?.likeCount || 0,
        dislikes: 0,
        key: id,
      };
      return (
        <div key={replyCommentData.key}>
          <Comment data={replyCommentData} />
        </div>
      );
    }

    return null; // Ensure every case has a return statement
  });
};

export default CommentsList;
