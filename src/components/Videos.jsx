import { format } from "date-fns";
import { Link } from "react-router-dom";
// import { currDate } from "../utils/constant";

const Videos = ({ videos }) => {
  return (
    <div className="grid gap-4 px-4 md:px-6 lg:px-8 mt-4">
      {videos?.map((video) => {
        const { snippet } = video;
        const {
          title,
          channelTitle,
          channelId,
          publishedAt,
          description,
          thumbnails,
        } = snippet;
        const videoId = video.id.videoId;
        const formatPublishedDate = format(
          new Date(publishedAt),
          "MMM d, yyyy"
        );

        return (
          <Link to={`/watch?v=${videoId}`} key={videoId}>
            <div className="flex gap-4 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200">
              {/* Video Thumbnail */}
              <img
                className="w-64 h-36 object-cover rounded-md flex-shrink-0"
                src={thumbnails?.high?.url}
                alt={title}
              />

              {/* Video Details */}
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold line-clamp-2 leading-tight">
                  {title}
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Link
                    to={`/channel/${channelId}`}
                    className="font-medium hover:text-blue-600"
                  >
                    {channelTitle}
                  </Link>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs">{formatPublishedDate}</span>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {description}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Videos;
