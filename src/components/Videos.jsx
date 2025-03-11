import { format } from "date-fns";
import { Link } from "react-router-dom";
import { currDate } from "../utils/constant";

const Videos = ({ videos }) => {
  return (
    <div className="flex flex-col gap-5 px-5 ml-5 mt-3">
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
        const formatPublishedDate = format(new Date(publishedAt), "PP");

        return (
          <Link to={`/watch?v=${videoId}`} key={videoId}>
            <div className="flex gap-4 p-4">
              {/* Video Thumbnail */}
              <img
                className="w-60 h-40 object-cover rounded-lg"
                src={thumbnails?.high?.url}
                alt="thumbnail"
              />

              {/* Video Details */}
              <div className="flex flex-col justify-center gap-4">
                <h2 className="text-2xl font-semibold line-clamp-1">{title}</h2>
                <div className="text-gray-900 text-md">
                  <span className="font-semibold">Channel:</span>{" "}
                  <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
                </div>
                <div className="text-gray-900 text-xs">
                  <span className="font-semibold"> Published on:</span>{" "}
                  {currDate} | {formatPublishedDate}
                </div>
                <p className="text-gray-600 text-sm mt-1 line-clamp-3">
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
