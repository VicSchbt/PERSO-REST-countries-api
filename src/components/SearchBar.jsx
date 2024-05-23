import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setCountries }) => {
  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    const apiUrl = `/api/countries?name=${input}`;
    const res = await fetch(apiUrl);
    if (res.status === 200) {
      const data = await res.json();
      data.length > 0 && setCountries(data[0]);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-dark-blue px-6 py-4 rounded flex justify-between items-center"
    >
      <div className="text-white flex gap-3 items-center">
        <label htmlFor="search" aria-label="Search">
          <FaSearch />
        </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a country..."
          className="bg-transparent placeholder:text-slate-200 focus-visible:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
