import { useSelector } from "react-redux";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { FaEye, FaHeart, FaComment } from "react-icons/fa";

const VideoCard = () => {
  const getAllVideos = useSelector((store) => store?.videos?.youtubeVideos);
  if (!getAllVideos) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
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
            <div className="w-full hover:scale-105 transition-transform duration-200">
              <div className="relative">
                <img
                  alt={title}
                  src={thumbnails?.high?.url}
                  className="w-full h-44 object-cover rounded-lg"
                />
                <span className="absolute bottom-1.5 right-1.5 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded-md">
                  {formattedDuration}
                </span>
              </div>
              <div className="mt-3 flex gap-3">
                <div>
                  <h3 className="text-xs font-semibold leading-tight">
                    {title}
                  </h3>
                  <Link
                    to={`/channel/${channelId}`}
                    className="text-xs text-gray-600 hover:text-gray-900 mt-1"
                  >
                    {channelTitle}
                  </Link>
                  <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                    <span className="flex items-center gap-1.5">
                      <FaEye className="text-gray-400" />
                      <span className="font-medium">{viewCount}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaHeart className="text-gray-400" />
                      <span className="font-medium">{likeCount}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComment className="text-gray-400" />
                      <span className="font-medium">{commentCount}</span>
                    </span>
                    <span className="text-gray-500">{formattedDate}</span>
                  </div>
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
