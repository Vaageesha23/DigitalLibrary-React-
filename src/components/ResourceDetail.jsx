import { useParams } from "react-router-dom";
import { resources } from "../data/resources";
import { useState, useEffect } from "react";

function ResourceDetail() {

  const { id } = useParams();

  const resource =
    resources.find((r) => r.id === Number(id));

  const [showContent, setShowContent] =
    useState(false);

  const [bookmarked, setBookmarked] =
    useState(false);

  const [wishlisted, setWishlisted] =
    useState(false);


  // Load bookmark and wishlist status
  useEffect(() => {

    const bookmarks =
      JSON.parse(localStorage.getItem("bookmarks") || "[]");

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist") || "[]");

    setBookmarked(bookmarks.includes(resource?.id));

    setWishlisted(wishlist.includes(resource?.id));

  }, [resource]);


  if (!resource)
    return <h2>Resource Not Found</h2>;


  // Add bookmark
  const addToBookmarks = () => {

    let bookmarks =
      JSON.parse(localStorage.getItem("bookmarks") || "[]");

    if (bookmarks.includes(resource.id)) {

      bookmarks =
        bookmarks.filter((id) => id !== resource.id);

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


  // Add wishlist
  const addToWishlist = () => {

    let wishlist =
      JSON.parse(localStorage.getItem("wishlist") || "[]");

    if (wishlist.includes(resource.id)) {

      wishlist =
        wishlist.filter((id) => id !== resource.id);

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


  return (

    <div className="detail-page">

      <img
        src={resource.image}
        alt={resource.title}
        className="detail-image"
      />

      <h2>{resource.title}</h2>

      <p>
        <strong>Author:</strong> {resource.author}
      </p>

      <p>
        <strong>Category:</strong> {resource.category}
      </p>

      <p>{resource.description}</p>


      <button onClick={addToWishlist}>

        {wishlisted
          ? "❤️ Wishlisted"
          : "🤍 Add to Wishlist"}

      </button>


      <button onClick={addToBookmarks}>

        {bookmarked
          ? "⭐ Bookmarked"
          : "☆ Bookmark"}

      </button>


      <button
        onClick={() =>
          setShowContent(!showContent)
        }
      >

        {showContent
          ? "Hide Content"
          : "Open Content"}

      </button>


      {showContent && (

        <div className="book-content">

          <p>{resource.content}</p>

        </div>

      )}


      <a
        href={resource.source}
        target="_blank"
        rel="noopener noreferrer"
        className="source-btn"
      >

        View Book Source

      </a>

    </div>

  );

}

export default ResourceDetail;