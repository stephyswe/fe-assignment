export const SearchInput = ({ input, handleInputChange }: any) => (
  <input
    type="text"
    value={input} // Controlled input
    onChange={handleInputChange} // Set input state on change
    placeholder="Search for TV shows"
    className="component-search-input"
  />
);
