import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">

      {/* HERO SECTION */}
      <h1 className="hero-title">
        📚 Welcome to Digital Library
      </h1>

      <p className="hero-subtitle">
        Discover, explore, and manage your learning resources in one place.
      </p>

      <Link to="/library">
        <button className="hero-button">
          Browse Library →
        </button>
      </Link>


      {/* FEATURES SECTION */}
      <div className="features-section">

        <div className="feature-card">
          <h3>🔍 Smart Search</h3>
          <p>
            Quickly find resources using real-time search filtering.
          </p>
        </div>

        <div className="feature-card">
          <h3>📖 Detailed View</h3>
          <p>
            Access complete information about each resource.
          </p>
        </div>

        <div className="feature-card">
          <h3>⚡ Fast Navigation</h3>
          <p>
            Seamless navigation without page reload.
          </p>
        </div>

      </div>


      {/* STATS SECTION */}
      <div className="stats-section">

        <div>
          <h2>50+</h2>
          <p>Resources</p>
        </div>

        <div>
          <h2>10+</h2>
          <p>Categories</p>
        </div>

        <div>
          <h2>100+</h2>
          <p>Users</p>
        </div>

      </div>


      {/* FOOTER MESSAGE */}
      <p className="home-footer">
        Empower your learning journey with modern digital access.
      </p>


    </div>
  );
}

export default Home;