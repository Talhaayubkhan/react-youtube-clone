import { useSelector } from "react-redux";
import { currDate } from "../utils/constant";
import { format } from "date-fns";
import { Link } from "react-router-dom";
const VideoCard = () => {
  const getAllVideos = useSelector((store) => store?.videos?.youtubeVideos);
  if (!getAllVideos) return;

  return (
    <div className="flex flex-wrap">
      {getAllVideos.map((video) => {
        const { snippet, statistics } = video;
        const { title, thumbnails, publishedAt } = snippet;
        const { viewCount, likeCount } = statistics;
        const formatPublishedDate = format(new Date(publishedAt), "PP");

        return (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <div className="p-4 mt-2 w-68 shadow-lg">
              <img alt="tumbnail" src={thumbnails?.medium?.url} />
              <ul>
                <li className="font-bold text-sm">{title}</li>
                <li>
                  <span className="font-semibold">Views:</span> {viewCount}
                </li>
                <li>
                  <span className="font-semibold">Likes:</span> {likeCount}
                </li>
              </ul>
              <div className="text-gray-700 font-semibold text-xs">
                Published on: {currDate} | {formatPublishedDate}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default VideoCard;
