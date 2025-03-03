import { useEffect, useState } from "react";
import { youtubeSuggestionsResultsURL } from "../utils/constant";
import { useSearchParams } from "react-router-dom";

export const useVideosResult = () => {
  const [videoResults, setVideosResults] = useState([]);
  const [videoParams] = useSearchParams();
  const searchQuery = videoParams.get("search_query");

  const getResults = async () => {
    if (!searchQuery || searchQuery.trim() === "") return;

    try {
      const fetchResults = youtubeSuggestionsResultsURL(searchQuery);
      const data = await fetch(fetchResults);
      const response = await data.json();
      // console.log(response);
      setVideosResults(response.items);
    } catch (error) {
      console.error("Error fetching results: " + error);
      setVideosResults([]);
    }
  };

  useEffect(() => {
    getResults();
  }, [searchQuery]);

  return { videoResults };
};
