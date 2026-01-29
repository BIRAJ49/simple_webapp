import { Routes, Route, useNavigate, Link } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card">
        <h1>Homepage</h1>
        <p>
          This is a simple React homepage. Click the button to go to the second
          page.
        </p>
        <button onClick={() => navigate("/second")}>Go to Second Page</button>
      </div>
    </div>
  );
}

function SecondPage() {
  return (
    <div className="page">
      <div className="card">
        <h1>Second Page</h1>
        <p>You made it here via the redirect button.</p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
}
