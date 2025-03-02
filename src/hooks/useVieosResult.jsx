import { useEffect, useState } from "react";
import { youtubeSuggestionsResultsURL } from "../utils/constant";
import { useSearchParams } from "react-router-dom";

export const useVideosResult = () => {
  const [videoResults, setVideosResults] = useState([]);
  const [videoParams] = useSearchParams();
  const searchQuery = videoParams.get("search_query");

  const getResults = async () => {
    const fetchResults = youtubeSuggestionsResultsURL(searchQuery);
    const data = await fetch(fetchResults);
    const response = await data.json();
    setVideosResults(response.items);
  };

  useEffect(() => {
    console.log("render!");
    getResults();
  }, [searchQuery]);

  return { videoResults };
};
