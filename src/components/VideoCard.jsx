import { useSelector } from "react-redux";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { FaEye, FaHeart, FaComment } from "react-icons/fa";

const VideoCard = () => {
  const getAllVideos = useSelector((store) => store?.videos?.youtubeVideos);
  if (!getAllVideos) return null;

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4 bg-gray-100 min-h-screen">
      {getAllVideos.map((video) => {
        const { snippet, statistics, contentDetails } = video;
        const { title, thumbnails, publishedAt, channelTitle, channelId } =
          snippet;
        const { viewCount, commentCount, likeCount } = statistics;
        const { duration } = contentDetails;
        const formattedDuration =
          duration
            ?.replace("PT", "")
            ?.replace(/H|M/g, ":")
            ?.replace("S", "")
            ?.split(":")
            ?.filter(Boolean)
            ?.map((t) => t.padStart(2, "0"))
            ?.join(":") || "N/A";
        const formattedDate = format(new Date(publishedAt), "MMM d, yyyy");

        return (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  alt={title}
                  src={thumbnails?.high?.url}
                  className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105 hover:brightness-110"
                />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {formattedDuration}
                </span>
              </div>

              {/* Content */}
              <div className="p-3">
                <h3
                  className="text-sm font-bold text-gray-800 mb-1 line-clamp-2"
                  title={title}
                >
                  {title}
                </h3>

                <Link
                  to={`/channel/${channelId}`}
                  className="text-xs text-gray-500 hover:text-blue-600"
                >
                  {channelTitle}
                </Link>

                {/* Stats */}
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaEye className="text-gray-400" />{" "}
                    {Number(viewCount).toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaHeart className="text-gray-400" />{" "}
                    {Number(likeCount).toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaComment className="text-gray-400" />{" "}
                    {Number(commentCount).toLocaleString()}
                  </span>
                </div>

                <div className="text-xs text-gray-400 mt-1">
                  {formattedDate}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default VideoCard;
