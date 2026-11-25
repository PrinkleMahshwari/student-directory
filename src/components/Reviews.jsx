import { useState } from 'react';

export default function Reviews({ rating, comment, reviewerName, reviewDate }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`card h-100 overflow-hidden ${
        hovered ? 'shadow-lg border-primary' : 'shadow-sm border-light-subtle'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          {/* Top Row: Rating Badge (Matching ProductCard) & Date */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="badge bg-warning-subtle text-dark border border-warning-subtle">
              ⭐ {rating} / 5
            </span>
            <small className="text-muted">{reviewDate}</small>
          </div>

          {/* Review Comment */}
          <p className={`card-text mb-3 ${hovered ? 'text-dark' : 'text-secondary'}`}>
            "{comment}"
          </p>
        </div>

        {/* Reviewer Name Footer */}
        <div className="pt-2 border-top d-flex justify-content-between align-items-center">
          <small className="text-muted">Reviewed by</small>
          <span className={`fw-semibold small ${hovered ? 'text-primary' : 'text-dark'}`}>
            {reviewerName}
          </span>
        </div>
      </div>
    </div>
  );
}
