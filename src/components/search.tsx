import { useState } from "react";
import SearchButton from "./search-button/search-button";
import { SearchInput } from "./search-input/search-input";

export const SearchDetails = () => (
  <>
    {/* Input for searching TV shows */}
    <input
      type="text"
      placeholder="Search for TV shows"
      className="text-xl font-['Helvetica'] flex-grow outline-none border rounded py-1 px-3"
    />

    {/* Search button */}
    <SearchButton onSearch={() => {}} input="" variant="alternative" />
  </>
);

export const SearchDefault = ({ onSearch, defaultInput = "" }: any) => {
  const [input, setInput] = useState(defaultInput);

  // Handle change in input value
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <>
      {/* Input for searching TV shows */}
      <SearchInput input={input} handleInputChange={handleInputChange} />
      {/* Search button */}
      <SearchButton input={input} onSearch={onSearch} />
    </>
  );
};
