import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenuIcon } from "../utils/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenuIcon());
  }, []);
  return <div>WatchPage</div>;
};

export default WatchPage;
