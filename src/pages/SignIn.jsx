import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!email || !password) {

      setError("Please fill all fields");

      return;

    }

    if (password.length < 6) {

      setError("Password must be at least 6 characters");

      return;

    }

    // Store user (IMPORTANT FIX)
    localStorage.setItem("user", JSON.stringify({ email }));

    setError("");

    alert("Login Successful!");

    navigate("/");

  };

  return (

    <div className="auth-container">

      <form className="auth-card" onSubmit={handleSubmit}>

        <h2>Sign In</h2>

        {error && <p className="error-text">{error}</p>}

        <input

          type="email"

          placeholder="Enter Email"

          value={email}

          onChange={(e) => setEmail(e.target.value)}

        />

        <input

          type="password"

          placeholder="Enter Password"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

        />

        <button type="submit">Login</button>

      </form>

    </div>

  );

}

export default SignIn;