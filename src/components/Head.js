import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { Link } from "react-router-dom";

import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  // console.log(searchQuery);
  useEffect(() => {
    // console.log(searchQuery);
    // make an api call for every key press
    // getSearchSuggestions();

    // but difference btw 2 key stroke is less than 200ms decline the api call
    const timer = setTimeout(() => {
      // if search query already present in cache i.e search store
      if (searchCache[searchQuery]) setSuggestions(searchCache[searchQuery]);
      else {
        getSearchSuggestions();
      }
      // if search query is not present in cache i.e search store
    }, 200);

    // when the component rerender this will be called to destroy the timer
    // And if timer is already expired there will be nothing to return, timer is alredy finished and called getSearchSuggestions
    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API CALL "+searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    // console.log(json[1])
    setSuggestions(json[1]);
    // update in cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleClick = (value) => {
    setSearchQuery(value);
    // console.log("Hello SearchInput " + searchQuery);
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 h-[82px] shadow-lg sticky top-0 z-50 w-full bg-white items-center">
      <div className="flex col-span-2 items-center">
        <img
          className="w-10 h-10 sm:w-10 sm:h-10 cursor-pointer hover:bg-gray-100 hover:rounded-full"
          onClick={() => toggleMenuHandler()}
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8 w-14 md:min-w-max"
            src="https://www.shutterstock.com/image-vector/zdolbuniv-ukraine-march-29-2023-260nw-2281736185.jpg"
            alt="youtube-logo"
          />
        </a>
      </div>

      <div className="col-span-9 px-10">
        <div className="w-[140%] sm:w-[130%] lg:col-span-9">
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"
            onClick={(e) => handleClick(e.target.value)}
          >
            🔍
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[75%] md:w-[50%] lg:w-[46%] rounded-lg border border-gray-100 shadow-lg">
            <ul>
              {suggestions.map((s) =>(<li 
                  onClick={()=>console.log("hello list")}
                  key={s} className="py-2 px-5 shadow-sm hover:bg-gray-100">
                    🔍{s}
                  </li>
                  )
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 inline-block">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
          alt="user"
        />
      </div>
    </div>
  );
};
export default Head;
