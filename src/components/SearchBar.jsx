function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search resources..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      aria-label="Search Resources"
    />
  );
}

export default SearchBar;