import { Link } from "react-router-dom";

function ResourceCard({ resource }) {
  return (
    <div className="card" tabIndex="0">
      <h3>{resource.title}</h3>
      <p><strong>Author:</strong> {resource.author}</p>
      <p><strong>Category:</strong> {resource.category}</p>
      <Link to={`/library/${resource.id}`}>View Details</Link>
    </div>
  );
}

export default ResourceCard;