function SearchBar({ search, setSearch }) {

  return (

    <div className="search-container">

      <input

        type="text"

        className="search-input"

        placeholder="🔍 Search resources..."

        value={search}

        onChange={(e) =>
          setSearch(e.target.value)
        }

        aria-label="Search Resources"

      />

    </div>

  );

}

export default SearchBar;