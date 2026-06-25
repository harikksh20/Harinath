import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">

      <div className="search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search fresh products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <button className="search-btn">
          Search
        </button>

      </div>

    </div>
  );
}

export default SearchBar;