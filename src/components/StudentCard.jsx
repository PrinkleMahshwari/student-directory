import { useState } from "react";

function Avatar() {
  return (
    <div className="d-flex justify-content-center align-items-end w-100" style={{ background: "#c8c8d0", height: "102px" }}>
      <svg width="220" height="102" viewBox="0 0 220 102" fill="#8c8c91" aria-hidden="true" className="w-100 h-100">
        <circle cx="110" cy="45" r="30" />
        <path d="M67 102 C67 84 85 76 110 76 C135 76 153 84 153 102 Z" />
      </svg>
    </div>
  );
}

export default function StudentCard({ id, name, major, year, gpa, tag, email, phone }) {
  const isPrimary = tag.includes("primary");

  const [views, setViews] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  function handleViews() {
    setViews(views + 1);
  }

  return (
    <div className="card border student-card-item w-100" style={{ width: "220px", maxWidth: "220px" }}>
      <Avatar />
      <div className="card-body p-3">
        <h4 className="card-title fs-5 fw-bold text-dark mb-2">{name}</h4>
        <p className="card-text text-dark mb-3 lh-sm small">
          ID: {id}<br />
          Major: {major}<br />
          Year: {year}<br />
          GPA: {gpa}
        </p>

        <div className="d-flex gap-2 mb-2">
          {/* Combined 'View Profile' click logic here to increment views */}
          <button
            onClick={handleViews}
            className="btn btn-outline-primary btn-sm flex-grow-1 py-1 text-nowrap"
          >
            View Profile
          </button>
          <button className="btn btn-outline-danger btn-sm flex-grow-1 py-1 text-nowrap">Delete</button>
        </div>

        <button
          className={`btn btn-sm w-100 py-1 font-monospace disabled text-center mb-3 ${isPrimary ? 'btn-outline-primary' : 'btn-outline-danger'
            }`}
          style={{ fontSize: '0.78rem' }}
        >
          {tag}
        </button>

        <div className="d-flex justify-content-between align-items-center mb-3 small text-muted">
          <span>Profile Views:</span>
          <span className="badge bg-secondary rounded-pill">{views}</span>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="btn btn-sm btn-light w-100 border text-secondary mb-2"
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {showDetails && (
          <div className="p-2 bg-light border rounded small text-dark mt-2">
            <p className="mb-1 text-truncate"><strong>Email:</strong> {email}</p>
            <p className="mb-0 text-truncate"><strong>Phone:</strong> {phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}
