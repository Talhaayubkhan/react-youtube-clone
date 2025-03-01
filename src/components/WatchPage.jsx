import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenuIcon } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenuIcon());
  }, []);

  return (
    <div className="flex flex-col">
      <div className="px-6 mt-5">
        <iframe
          width="950"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
