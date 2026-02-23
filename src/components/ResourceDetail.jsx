import { useParams, useNavigate } from "react-router-dom";
import { resources } from "../data/resources";

function ResourceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const resource = resources.find(
    (res) => res.id === Number(id)
  );

  if (!resource) {
    return <h2 className="message">Resource not found</h2>;
  }

  return (
    <div className="detail-container">
      <h2>{resource.title}</h2>
      <p><strong>Author:</strong> {resource.author}</p>
      <p><strong>Category:</strong> {resource.category}</p>
      <p>{resource.description}</p>

      <button onClick={() => navigate("/library")}>
        Back to Library
      </button>
    </div>
  );
}

export default ResourceDetail;