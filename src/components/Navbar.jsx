import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary px-4">
      <Link to="/" className="navbar-brand fw-bold mb-0">
        Product Listing App
      </Link>
      <span className="navbar-text text-white-50">
        REACT API Integration
      </span>
    </nav>
  );
}
