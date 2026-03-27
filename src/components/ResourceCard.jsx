import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ResourceCard({ resource }) {

  const [bookmarked, setBookmarked] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Load bookmark and wishlist status safely
  useEffect(() => {

    const bookmarks =
      JSON.parse(localStorage.getItem("bookmarks") || "[]");

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist") || "[]");

    setBookmarked(bookmarks.includes(resource.id));
    setWishlisted(wishlist.includes(resource.id));

  }, [resource.id]);


  // Load progress safely
  useEffect(() => {

    const savedProgress =
      JSON.parse(localStorage.getItem("progress") || "{}");

    setProgress(savedProgress[resource.id] || 0);

  }, [resource.id]);


  // Toggle bookmark
  const toggleBookmark = () => {

    let bookmarks =
      JSON.parse(localStorage.getItem("bookmarks") || "[]");

    if (bookmarks.includes(resource.id)) {

      bookmarks = bookmarks.filter((id) => id !== resource.id);

      setBookmarked(false);

    } else {

      bookmarks.push(resource.id);

      setBookmarked(true);

    }

    localStorage.setItem(
      "bookmarks",
      JSON.stringify(bookmarks)
    );

  };


  // Toggle wishlist
  const toggleWishlist = () => {

    let wishlist =
      JSON.parse(localStorage.getItem("wishlist") || "[]");

    if (wishlist.includes(resource.id)) {

      wishlist = wishlist.filter((id) => id !== resource.id);

      setWishlisted(false);

    } else {

      wishlist.push(resource.id);

      setWishlisted(true);

    }

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

  };


  // Update progress (FIXED: ensures number)
  const updateProgress = (value) => {

    const savedProgress =
      JSON.parse(localStorage.getItem("progress") || "{}");

    savedProgress[resource.id] = value;

    localStorage.setItem(
      "progress",
      JSON.stringify(savedProgress)
    );

    setProgress(value);

  };


  return (

    <div className="card">

      <h3>{resource.title}</h3>

      <p>
        <strong>Author:</strong> {resource.author}
      </p>

      <p>
        <strong>Category:</strong> {resource.category}
      </p>

      <img
        src={resource.image}
        alt={resource.title}
        className="resource-img"
      />


      <div className="card-actions">

        <button onClick={toggleBookmark}>

          {bookmarked ? "⭐ Bookmarked" : "☆ Bookmark"}

        </button>

        <button onClick={toggleWishlist}>

          {wishlisted ? "❤️ Wishlisted" : "🤍 Wishlist"}

        </button>

      </div>


      <div className="progress-section">

        <label>

          Progress: {progress}%

        </label>


        {/* FIXED LINE HERE */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) =>
            updateProgress(Number(e.target.value))
          }
        />


        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>

        </div>

      </div>


      <Link to={`/library/${resource.id}`}>

        View Details

      </Link>


    </div>

  );

}

export default ResourceCard;