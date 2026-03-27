import { useEffect, useState } from "react";

function Achievements() {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const progress =
      JSON.parse(localStorage.getItem("progress")) || {};
    const bookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const completedBooks = Object.values(progress).filter(
      (value) => Number(value) === 100
    ).length;

    const unlocked = [];

    if (completedBooks >= 1)
      unlocked.push("📖 First Read");
    if (completedBooks >= 3)
      unlocked.push("🔥 Book Lover");
    if (completedBooks >= 5)
      unlocked.push("🏆 Reading Master");
    if (wishlist.length >= 3)
      unlocked.push("❤️ Collector");
    if (bookmarks.length >= 3)
      unlocked.push("⭐ Bookmark Pro");

    setBadges(unlocked);
  }, []);

  return (
    <div className="page">
      <h2>🏆 Achievements</h2>

      {badges.length > 0 ? (
        <div className="badge-grid">
          {badges.map((badge, index) => (
            <div key={index} className="badge">
              {badge}
            </div>
          ))}
        </div>
      ) : (
        <p className="message">
          Start reading to unlock badges!
        </p>
      )}
    </div>
  );
}

export default Achievements;