import { useState, useEffect } from "react";
import { resources } from "../data/resources";
import ResourceCard from "../components/ResourceCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

function Library() {
  const [resourcesData, setResourcesData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Simulate async loading
  useEffect(() => {
    setTimeout(() => {
      setResourcesData(resources);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredResources = resourcesData.filter((resource) =>
    resource.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h2>Library Resources</h2>

      <SearchBar search={search} setSearch={setSearch} />

      {loading ? (
        <Loader />
      ) : (
        <div className="library-grid">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))
          ) : (
            <p className="message">No resources found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Library;