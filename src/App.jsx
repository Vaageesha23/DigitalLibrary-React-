import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Library from "./pages/Library";
import ResourceDetail from "./components/ResourceDetail";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import Wishlist from "./pages/Wishlist";
import Recommendations from "./components/Recommendations";
function App() {

  const location = useLocation();

  return (
    <>
      {/* Hide Navbar on login page */}
      {location.pathname !== "/login" && <Navbar />}

      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/library"
          element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          }
        />

        <Route
          path="/library/:id"
          element={
            <ProtectedRoute>
              <ResourceDetail />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
        <Route path="/recommendations" element={<Recommendations />} />

      </Routes>
    </>
  );
}

export default App;