import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenuIcon } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenuIcon());
  }, []);

  return (
    <div className="flex flex-col w-[100%]">
      <div className="px-6 mt-5 flex w-full">
        <div>
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
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="w-[60%]">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
