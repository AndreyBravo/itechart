import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not_found_page">
      <h1>404</h1>
      <h3>Not found page</h3>
      <Link to="/">Go Home</Link>
    </div>
  );
};