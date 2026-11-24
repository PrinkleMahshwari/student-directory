import { useState } from 'react';

export default function ProductCard({ title, price, discountPercentage, rating, thumbnail }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`card h-100 overflow-hidden ${
        hovered ? 'shadow-lg border-primary' : 'shadow-sm border-light-subtle'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail Wrapper with Discount Badge at Top-Right */}
      <div className={`position-relative p-3 ${hovered ? 'bg-primary-subtle' : 'bg-light'}`}>
        <img
          src={thumbnail}
          className={`card-img-top object-fit-contain ${hovered ? 'p-0' : 'p-2'}`}
          alt={title}
          style={{ height: '220px' }}
        />
        {discountPercentage > 0 && (
          <span className="badge bg-danger position-absolute top-0 end-0 m-2 px-2 py-1">
            -{Math.round(discountPercentage)}%
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column justify-content-between">
        {/* Row 1: Title (Left) & Price (Right) */}
        <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
          <h6 className={`card-title fw-semibold mb-0 ${hovered ? 'text-primary' : ''}`}>
            {title}
          </h6>
          <span className="fw-bold text-primary text-nowrap">${price}</span>
        </div>

        {/* Row 2: Rating (Left) & View Button (Right) */}
        <div className="d-flex justify-content-between align-items-center pt-2 border-top">
          <span className="badge bg-warning-subtle text-dark border border-warning-subtle">
            ⭐ {rating}
          </span>
          <button className={`btn btn-sm px-3 ${hovered ? 'btn-primary' : 'btn-outline-primary'}`}>
            View
          </button>
        </div>
      </div>
    </div>
  );
}
