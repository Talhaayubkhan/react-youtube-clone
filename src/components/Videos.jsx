import { format } from "date-fns";
import { Link } from "react-router-dom";
import { currDate } from "../utils/constant";

const Videos = ({ videos }) => {
  return (
    <div className="flex flex-col gap-4 px-5 ml-5 mt-5">
      {videos?.map((video) => {
        const { snippet } = video;
        const { title, channelTitle, publishedAt, description, thumbnails } =
          snippet;
        const videoId = video.id.videoId;
        const formatPublishedDate = format(new Date(publishedAt), "PP");

        return (
          <Link to={`/watch?v=${videoId}`} key={videoId}>
            <div className="flex gap-4 p-4">
              {/* Video Thumbnail */}
              <img
                className="w-52 h-32 object-cover rounded-md"
                src={thumbnails.high.url}
                alt="thumbnail"
              />

              {/* Video Details */}
              <div className="flex flex-col justify-center gap-1">
                <h2 className="text-2xl font-semibold line-clamp-2">{title}</h2>
                <p className="text-black font-semibold text-md">
                  {channelTitle}
                </p>
                <div className="text-gray-900 text-xs">
                  <span className="font-semibold"> Published on:</span>{" "}
                  {currDate} | {formatPublishedDate}
                </div>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
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
