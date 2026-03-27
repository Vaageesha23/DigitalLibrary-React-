import { resources } from "../data/resources";
import ResourceCard from "../components/ResourceCard";

function Wishlist() {

  const wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

  const wishlistBooks =
    resources.filter((r) =>
      wishlist.includes(r.id)
    );

  return (

    <div className="page">

      <h2>My Wishlist ❤️</h2>

      <div className="library-grid">

        {wishlistBooks.length > 0 ? (

          wishlistBooks.map((resource) => (

            <ResourceCard
              key={resource.id}
              resource={resource}
            />

          ))

        ) : (

          <p>No wishlist items</p>

        )}

      </div>

    </div>

  );

}

export default Wishlist;