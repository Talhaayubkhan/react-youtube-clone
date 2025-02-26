import { useEffect, useState } from "react";
import { YOUTUB_SEARCH_SUGGESTIONS_API_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { cacheSearchResults } from "../utils/searchSlice";

export const useSearchSuggestions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState([]);
  const dispatch = useDispatch();

  const storeCacheResult = useSelector((store) => store?.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (storeCacheResult[searchQuery]) {
        // ✅ If the search query exists in the cache, use cached results
        setShowSuggestions(storeCacheResult[searchQuery]);
      } else {
        // ✅ If not in cache, fetch new suggestions from the API
        getSearchSuggestion();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    console.log("API CALL - ", searchQuery);

    const data = await fetch(YOUTUB_SEARCH_SUGGESTIONS_API_URL + searchQuery);
    const json = await data.json();

    setShowSuggestions(json[1]);

    // ✅ Store new search result in Redux cache to prevent redundant API calls
    dispatch(
      cacheSearchResults({
        [searchQuery]: json[1], // ✅ Dynamic key-value pair (search query as key, suggestions as value)
      })
    );
  };

  return { searchQuery, setSearchQuery, showSuggestions };
};
