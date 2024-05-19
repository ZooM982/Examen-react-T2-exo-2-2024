import { useState } from "react";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [searchWord, setSearchWord] = useState("");

  const fetchData = (value) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((en) => {
          return (
            value 
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setSearchWord(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="Type to search..."
        value={searchWord}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};