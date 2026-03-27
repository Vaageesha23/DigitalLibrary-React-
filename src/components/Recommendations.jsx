import { resources } from "../data/resources";
import ResourceCard from "../components/ResourceCard";

function Recommendations() {

  // Safe parsing
  const bookmarks =
    JSON.parse(localStorage.getItem("bookmarks") || "[]");


  // Get bookmarked resources
  const bookmarkedResources =
    resources.filter((resource) =>
      bookmarks.includes(resource.id)
    );


  // Get unique categories
  const categories = [
    ...new Set(
      bookmarkedResources.map(
        (resource) => resource.category
      )
    ),
  ];


  // Find recommended resources
  const recommended =
    resources.filter(
      (resource) =>
        categories.includes(resource.category) &&
        !bookmarks.includes(resource.id)
    );


  return (

    <div className="page">

      <h2>
        Recommended For You 🤖
      </h2>


      {recommended.length > 0 ? (

        <div className="library-grid">

          {recommended.map((resource) => (

            <ResourceCard
              key={resource.id}
              resource={resource}
            />

          ))}

        </div>

      ) : (

        <p className="message">

          Bookmark books to get recommendations!

        </p>

      )}

    </div>

  );

}

export default Recommendations;