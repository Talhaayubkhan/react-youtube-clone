import { useEffect, useState } from "react";
import { YOUTUB_SEARCH_SUGGESTIONS_API_URL } from "../utils/constant";

export const useSearchSuggestions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    //     console.log("API-CALL - " + searchQuery);
    const data = await fetch(YOUTUB_SEARCH_SUGGESTIONS_API_URL + searchQuery);
    const json = await data.json();
    // console.log(json);
    setShowSuggestions(json[1]);
  };

  return { searchQuery, setSearchQuery, showSuggestions };
};
