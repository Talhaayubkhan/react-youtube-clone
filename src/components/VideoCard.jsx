import { useSelector } from "react-redux";
import { currDate } from "../utils/constant";
import { format } from "date-fns";
import { Link } from "react-router-dom";
const VideoCard = () => {
  const getAllVideos = useSelector((store) => store?.videos?.youtubeVideos);
  if (!getAllVideos) return;

  return (
    <div className="flex flex-wrap gap-3 mt-5 px-3">
      {getAllVideos.map((video) => {
        const { snippet, statistics } = video;
        const { title, thumbnails, publishedAt } = snippet;
        const { viewCount, likeCount } = statistics;
        const formatPublishedDate = format(new Date(publishedAt), "PP");

        return (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <div className="p-3 max-w-72 shadow-xl rounded-xl border border-gray-500">
              <img
                alt="tumbnail"
                src={thumbnails?.medium?.url}
                className="rounded-xl"
              />
              <ul>
                <li className="font-bold text-sm">{title}</li>
                <li>
                  <span className="font-semibold">Views:</span> {viewCount}
                </li>
                <li>
                  <span className="font-semibold">Likes:</span> {likeCount}
                </li>
              </ul>
              <div className="text-gray-900 text-xs">
                <span className="font-semibold"> Published on:</span> {currDate}{" "}
                | {formatPublishedDate}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default VideoCard;
